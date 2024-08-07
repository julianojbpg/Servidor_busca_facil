
import { db } from "../instanciaDoBanco"
import {agenda} from "./tabelaAgenda"
import {categorias} from "./tabelaCategoria"
import {estabelecimentos} from "./tabelaEstabelecimentos"
import { funcionarios } from "./tabelaFuncionarios"
import {servicos} from "./tabelaServicos"
import {usuarios} from "./tabelaUsuarios"
import { funcionariosServicos } from "./tabelaFuncionarioServico"

export async function CriarTabelas(){

    estabelecimentos.belongsTo(usuarios, { foreignKey: 'id' })
    estabelecimentos.belongsTo(categorias, { foreignKey: 'id' })
    funcionarios.belongsTo(usuarios, { foreignKey: 'id' })
    agenda.belongsTo(funcionarios, { foreignKey: 'id' })
    agenda.belongsTo(usuarios, { foreignKey: 'id' })
    agenda.belongsTo(servicos, { foreignKey: 'id' })
    
    // faz relacionamentos mts pra mts e cria a tabela
    funcionarios.belongsToMany(servicos, { through: 'funcionariosservicos', foreignKey: 'funcionariosId', timestamps: false })
    servicos.belongsToMany(funcionarios, { through: 'funcionariosservicos', foreignKey: 'servicosId', timestamps: false  })
    funcionariosServicos.sync({force: true})

    
    await db.sync().then(()=>{
        console.log('as tabelas foram criadas')
    }).catch((erro)=> {
        console.log('erro ao criar tabelas', erro)
    })    
}