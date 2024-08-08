// Objetos
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
export interface ICategoria{
    id:number
    nome:string
}
export interface IValidacao{
    status: boolean
    msg: string
}