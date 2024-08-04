import { Sequelize } from "sequelize"
import { database, usuario, senha, localhost } from "../config"



export default class ConexaoDB {
    
    private database: string
    private usuario: string
    private senha: string
    private localhost: string
    
    constructor() {
        this.database = database
        this.usuario = usuario
        this.senha = senha
        this.localhost = localhost
    }

    async Conexao():Promise<Sequelize>{
        const sequelize =  new Sequelize(this.database, this.usuario, this.senha, {
            host: this.localhost,
            dialect: 'mysql'
            }
            )
            try {
                await sequelize.authenticate()
                console.log('A conexão com o banco de dados foi estabelecida com sucesso')
            } catch (error) {
                console.error('Não foi possível conectar ao banco de dados: ', error)
            }
            return sequelize
    }
}

// export function Conexao(){
//     const sequelize =  new Sequelize(database, usuario, senha, {
//         host: localhost,
//         dialect: 'mysql'
//         }
//         )
//         // try {
//         //     await sequelize.authenticate()
//         //     console.log('A conexão com o banco de dados foi estabelecida com sucesso')
//         // } catch (error) {
//         //     console.error('Não foi possível conectar ao banco de dados: ', error)
//         // }
//         return sequelize
// }