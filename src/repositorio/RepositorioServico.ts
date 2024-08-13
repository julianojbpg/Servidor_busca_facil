import { Optional } from "sequelize"
import { IServico } from "../@types/interfaceObjetos"
import { IRepositorioServico } from "../@types/interfaceRepositorios"
import { servicos } from "../database/models/tabelaServicos"


export default class RepositorioServico implements IRepositorioServico{
    constructor() {}

    public async cadastrar(servico: Optional<IServico, 'id'>):Promise<void>{
        await servicos.create(servico)
    }

    public async pesquisarTodosServicos():Promise<IServico[]> {
        const result = await servicos.findAll()
        return result.map(res => res.get({plain: true}) as IServico)
    }
    public async pesquisarServico(nome: string):Promise<IServico | null>{
        const result = await servicos.findOne({where:{ nome}})
        if(result === null)
            return null
        return result.get({ plain: true }) as IServico
    }
    public async atualizarServico(servico:IServico):Promise<number> {

        const {id, nome, preco, descricao} = servico
        const result:[affectedCount: number] = await servicos.update({
            nome:nome,
            preco:preco,
            descricao:descricao,
        },{where:{id}})

        if(result[0] === 0)
            return 0
        return 1
    }
    public async deletarServico(id: number): Promise<number> {

        const result = await servicos.destroy({where:{id}})

        if(result === 0)
            return 0
        return 1
    }
}