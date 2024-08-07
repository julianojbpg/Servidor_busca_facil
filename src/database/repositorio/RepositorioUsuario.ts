import { IRepositorioUsuario, IUsuario } from "../../@types/Interfaces"
import { usuarios } from "../models/tabelaUsuarios"

export default class RepositorioUsuario implements IRepositorioUsuario{
    constructor() {}

    public async cadastrar(usuario: IUsuario):Promise<void>{
            await usuarios.create(usuario)

    }

    public async pesquisarEmail(email: string):Promise<boolean>{
        const result = await usuarios.findOne({where:{ email}})
        if(result === null)
            return true
        return false
    }

    public async pesquisarTodosUsuarios():Promise<IUsuario[]> {
        const result:IUsuario[] = await usuarios.findAll()
        return result
    }

    public async pesquisarUsuario(email: string):Promise<IUsuario | null>{
        const result = await usuarios.findOne({where:{ email}})
        if(result === null)
            return null
        return result
    }

}