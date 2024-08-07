import { IUsuario, IValidacao, IValidacaoUsuario } from "../@types/Interfaces"
import RepositorioUsuario from "../database/repositorio/RepositorioUsuario"



export class ValidacaoUsuario implements IValidacaoUsuario {
    constructor() {}
    
    private validarEmail(email: string): IValidacao{
        // Expressão regular para validar o e-mail
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(email)) 
            return {status: false, msg: 'E-mail inválido'}

        return {status: true, msg: 'E-mail válido'}
    }
    private validarCampos(dados: any): IValidacao{
        for(const [chave, valor] of Object.entries(dados)){
            if(valor === '' || valor === null || valor === undefined){
                return {status: false, msg:`O campo ${chave} esta invalido podendo estar vazio, nulo ou indefinido`}
            }
        }
        return {status: true, msg:'campos com dados'}
    }
    private validaSenha(senha: string): IValidacao {
            const regex = /^(?=.*[A-Za-z]).{6,}$/
        
            if (!regex.test(senha)) {
                return { status: false, msg: 'Senha precisa ter pelo menos uma letra e no minimo 6 carateres' }
            }
            return { status: true, msg: 'senha ok' }
    }
    private validaTelefone(telefone: string):IValidacao {
            if (telefone.length === 11) 
                return { status: true, msg: 'senha ok' }
            
            return { status: false, msg: 'O telefone precisa ter exatamente 11 carateres' }
    }
    public async validarUsuario(usuario: IUsuario):Promise<string[] | []> {
        console.log('esse é o usuario: ', usuario)
        let erro:string[] = []

            const campos = this.validarCampos(usuario)
            if (!campos.status)
                erro.push(campos.msg)
        
            const Email = this.validarEmail(usuario.email)
            if (!Email.status)
                erro.push(Email.msg)
        
            const senha = this.validaSenha(usuario.senha)
            if (!senha.status)    
                erro.push(senha.msg)
        
            const telefone = this.validaTelefone(usuario.telefone)
            if (!telefone.status)
                erro.push(telefone.msg)
            
            const emaildb = await new RepositorioUsuario().pesquisarEmail(usuario.email)
            if (!emaildb)
                erro.push('esse email não esta disponivel')
            


            return erro
    }
    public async validarPesquisaUsuario(email:string):Promise<IUsuario | null>{
        const {status, msg} = this.validarEmail(email)
        console.log(email, msg)
        if(status){
            const result = await new RepositorioUsuario().pesquisarUsuario(email)
                console.log('chegou aqui')
                return result
        }
        console.log('chegou aqui no erro')
        return null
    }
}