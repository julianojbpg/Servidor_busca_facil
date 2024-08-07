import "dotenv/config"
import { Sequelize } from "sequelize"


export default class ConexaoDB {
    private static sequelizeDb :Sequelize


    private static dbConfig() {
        return {
            database: process.env.DATABASE || 'nome do banco',
            usuario: process.env.USERNAME || 'usuario',
            senha: process.env.PASSWORD || 'senha',
            localhost: process.env.LOCALHOST || 'local do host'
        }
    }

    constructor() { }

    public static Conexao(): Sequelize {
        if (!ConexaoDB.sequelizeDb) {
            const { database, localhost, senha, usuario } = this.dbConfig()
            ConexaoDB.sequelizeDb = new Sequelize(database, usuario, senha, {
                host: localhost,
                dialect: 'mysql'
            }
            )}

        return ConexaoDB.sequelizeDb
    }
}
