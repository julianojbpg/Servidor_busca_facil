import { ICategoria, IServico, IUsuario } from "./interfaceObjetos"

// Repositorios
export interface IRepositorioUsuario{
    cadastrar(usuario: IUsuario):Promise<void>
    pesquisarEmail(email: string):Promise<boolean>
    pesquisarTodosUsuarios():Promise<IUsuario[]>
    pesquisarUsuario(email: string):Promise<IUsuario | null>
    atualizarUsuario(usuario:IUsuario):Promise<number>
    deletarUsuario(id:number):Promise<number>
}
export interface IRepositorioCategoria{
    cadastrar(nome: string):Promise<void>
    pesquisarTodasCategorias():Promise<ICategoria[]>
    pesquisarCategoria(nome: string):Promise<ICategoria | null>
    atualizarCategoria(categoria:ICategoria):Promise<number>
    deletarCategoria(id:number):Promise<number>
}
export interface IRepositorioServico{
    cadastrar(servico: IServico):Promise<void>
    pesquisarTodosServicos():Promise<IServico[]>
    pesquisarServico(nome: string):Promise<IServico | null>
    atualizarServico(usuario:IServico):Promise<number>
    deletarServico(id:number):Promise<number>
}
