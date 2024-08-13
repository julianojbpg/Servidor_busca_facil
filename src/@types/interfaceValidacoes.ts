import { ICategoria, IServico, IUsuario } from "./interfaceObjetos"

//  Validaçoes 
export interface IValidacaoUsuario{
    validarUsuario(usuario: IUsuario):Promise<string[] | []>
    validarPesquisaUsuario(email:string):Promise<IUsuario | null>
    validarAtualizacaoUsuario(usuario: IUsuario):Promise<boolean>
    validarDeletarUsuario(id: number):Promise<boolean>
}
export interface IValidacaoCategoria{
    validarCategoria(categoria: ICategoria):Promise<string[] | []>
    validarPesquisaCategoria(nome:string):Promise<ICategoria | null>
    validarAtualizacaoCategoria(categoria: ICategoria):Promise<boolean>
    validarDeletarCategoria(id: number):Promise<boolean>
}
export interface IValidacaoServico{
    validarServico(servico: IServico):string[] | []
    validarPesquisaServico(nome:string):Promise<IServico | null>
    validarAtualizacaoServico(servico: IServico):Promise<boolean>
    validarDeletarServico(id: number):Promise<boolean>
}