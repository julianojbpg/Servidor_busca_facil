import { DataTypes, Model, Sequelize } from "sequelize"
import ConexaoDB from "../conexaoComDB"
import { usuario } from "../../config"


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


export default async function tabelaEstabelecimentos(db: Sequelize) {
  
  const estabelecimentos = db.define('estabelecimentos',{
    id:{
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
      type: DataTypes.STRING,
      allowNull: true
    },
    cep:{
      type: DataTypes.NUMBER,
      allowNull: true
    },
    usuarioId:{
      type: DataTypes.NUMBER,
      allowNull: true
    },
    urlLogo:{
      type: DataTypes.STRING,
      allowNull: true
    },
    urlBanckground:{
      type: DataTypes.STRING,
      allowNull: true
    },
    descricao:{
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
     timestamps: false,
  })

  return estabelecimentos
}