import { IServico, IValidacao } from "../@types/interfaceObjetos"
import { IValidacaoServico } from "../@types/interfaceValidacoes"
import RepositorioServico from "../repositorio/RepositorioServico"




export class ValidacaoServico implements IValidacaoServico{
    constructor() {}
    

    private validarCampos(dados: any): IValidacao{
        for(const [chave, valor] of Object.entries(dados)){
            if(valor === '' || valor === null || valor === undefined){
                return {status: false, msg:`O campo ${chave} esta invalido podendo estar vazio, nulo ou indefinido`}
            }
        }
        return {status: true, msg:'campos com dados'}
    }


    private validaPreco(preco: number):IValidacao {
            const precoRegx = /^\d+(\.\d{2})?$/
            if (!precoRegx.test(preco.toString()))
                return { status: true, msg: 'preço ok' }

            return { status: false, msg: 'O formato do preço esta incorreto' }
    }

    public validarServico(servico: IServico):string[] | [] {
        
        let erro:string[] = []

            const campos = this.validarCampos(servico)
            if (!campos.status)
                erro.push(campos.msg)

            const preco = this.validaPreco(servico.preco)
            if (!preco.status)
                erro.push(preco.msg)
            
            return erro
    }
    public async validarPesquisaServico(nome:string):Promise<IServico | null>{

        const result = await new RepositorioServico().pesquisarServico(nome)
        return result
  
    }
    public async validarAtualizacaoServico(servico: IServico):Promise<boolean>{
        const result = await new RepositorioServico().atualizarServico(servico)
        if(result === 0 )
            return false
        return true
    }

    public async validarDeletarServico(id: number):Promise<boolean>{
        const result = await new RepositorioServico().deletarServico(id)
        if(result === 0 )
            return false
        return true
    }
}