import { IUsuario } from "../@types/interfaceObjetos"
import { IRepositorioUsuario } from "../@types/interfaceRepositorios"
import { usuarios } from "../database/models/tabelaUsuarios"


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
    public async atualizarUsuario(usuario:IUsuario):Promise<number> {

        const {id, nome,senha,telefone} = usuario
        const result:[affectedCount: number] = await usuarios.update({
            nome:nome,
            telefone:telefone,
            senha:senha,
        },{where:{id}})

        if(result[0] === 0)
            return 0
        return 1
    }
    public async deletarUsuario(id: number): Promise<number> {

        const result = await usuarios.destroy({where:{id}})

        if(result === 0)
            return 0
        return 1
    }
}