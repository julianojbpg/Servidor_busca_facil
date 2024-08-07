import {Request, Response} from 'express'

export interface IReqRes{
    req: Request
    res: Response
}

export interface IUsuario{
    id:number
    nome:string
    email:string
    telefone:string
    senha:string
  }

export interface IValidacao{
    status: boolean
    msg: string
}

export interface IValidacaoUsuario{
    validarUsuario(usuario: IUsuario):Promise<string[] | []>
    validarPesquisaUsuario(email:string):Promise<IUsuario | null>
    validarAtualizacaoUsuario(usuario: IUsuario):Promise<boolean>
    validarDeletarUsuario(id: number):Promise<boolean>
}

export interface IRepositorioUsuario{
    cadastrar(usuario: IUsuario):Promise<void>
    pesquisarEmail(email: string):Promise<boolean>
    pesquisarTodosUsuarios():Promise<IUsuario[]>
    pesquisarUsuario(email: string):Promise<IUsuario | null>
    atualizarUsuario(usuario:IUsuario):Promise<number>
    deletarUsuario(id:number):Promise<number>
}

export interface IControllerUsuario{
    
}

