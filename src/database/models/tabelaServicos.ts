import { DataTypes, Model, Sequelize } from "sequelize"
import ConexaoDB from "../conexaoComDB"


// export default class Usuario extends Model{

//   static async initModel(){
//       const db = await new ConexaoDB().Conexao()
//       Usuario.init({
//         id:{
//           type: DataTypes.NUMBER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         nome:{
//           type: DataTypes.STRING,
//           allowNull: true
//         },
//         email:{
//           type: DataTypes.STRING
//         },
//         senha:{
//           type: DataTypes.STRING
//         }
//       },
//       {
//         sequelize: db,
//         modelName: 'usuario'
//       }
//       )
//   }
// }

// Usuario.initModel().catch((error)=>{
//   console.error("Erro ao inicializar o modelo Usuario: ", error)
// })


export default async function tabelaServicos(db: Sequelize) {
  
  const servicos = db.define('servicos',{
    id:{
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
      type: DataTypes.STRING,
      allowNull: true
    },
    preco:{
      type: DataTypes.DECIMAL,
      allowNull: true,
      unique: true
    },
    descricao:{
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
     timestamps: false,
    
  })

  return servicos
}