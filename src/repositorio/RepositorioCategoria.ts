import { ICategoria } from "../@types/interfaceObjetos"
import { IRepositorioCategoria } from "../@types/interfaceRepositorios"
import { categorias } from "../database/models/tabelaCategoria"


export default class RepositorioCategoria  implements IRepositorioCategoria {
   
    constructor() {}

    public async cadastrar(nome:string):Promise<void>{
            console.log('chegou aqui')
            await categorias.create({nome})

    }
    public async pesquisarTodasCategorias():Promise<ICategoria[]> {
        const result = await categorias.findAll()
        return result.map(res => res.get({plain: true}) as ICategoria)
    }
    public async pesquisarCategoria(nome: string):Promise<ICategoria | null>{
        const result = await categorias.findOne({where:{nome}})
        if(result === null)
            return null
        return result.get({ plain: true }) as ICategoria
    }
    public async atualizarCategoria(categoria:ICategoria):Promise<number> {

        const {id, nome} = categoria
        const result:[affectedCount: number] = await categorias.update({
            nome:nome,
        },{where:{id}})

        if(result[0] === 0)
            return 0
        return 1
    }
    public async deletarCategoria(id: number): Promise<number> {

        const result = await categorias.destroy({where:{id}})

        if(result === 0)
            return 0
        return 1
    }
}