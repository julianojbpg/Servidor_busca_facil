import { ICategoria, IValidacao } from "../@types/interfaceObjetos"
import { IValidacaoCategoria } from "../@types/interfaceValidacoes"
import RepositorioCategoria from "../repositorio/RepositorioCategoria"




export class ValidacaoCategoria implements IValidacaoCategoria {
    constructor() {}
    
    private validarCampos(dados: any): IValidacao{
        for(const [chave, valor] of Object.entries(dados)){
            if(valor === '' || valor === null || valor === undefined){
                return {status: false, msg:`O campo ${chave} esta invalido podendo estar vazio, nulo ou indefinido`}
            }
        }
        return {status: true, msg:'campos com dados'}
    }
    public async validarCategoria(categoria:ICategoria):Promise<string[] | []> {
        
        let erro:string[] = []

            const campos = this.validarCampos(categoria)
            if (!campos.status)
                erro.push(campos.msg)
        
            const nome = await new RepositorioCategoria().pesquisarCategoria(categoria.nome)
            if (nome != null)
                erro.push('Essa categoria ja existe') 
            return erro
    }
    public async validarPesquisaCategoria(nome:string):Promise<ICategoria | null>{

            const result = await new RepositorioCategoria().pesquisarCategoria(nome)
            return result

    }
    public async validarAtualizacaoCategoria(categoria: ICategoria):Promise<boolean>{
        const result = await new RepositorioCategoria().atualizarCategoria(categoria)
        if(result === 0 )
            return false
        return true
    }
    public async validarDeletarCategoria(id: number):Promise<boolean>{
        const result = await new RepositorioCategoria().deletarCategoria(id)
        if(result === 0 )
            return false
        return true
    }
}