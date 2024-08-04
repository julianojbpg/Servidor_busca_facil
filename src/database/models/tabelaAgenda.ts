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


export default async function tabelaAgenda(db: Sequelize) {
  
  const agenda = db.define('agenda',{
    id:{
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    funcionarioId:{
      type: DataTypes.NUMBER,
      allowNull: true
    },
    usuarioId:{
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    servicoId:{
      type: DataTypes.NUMBER,
      allowNull: true
    },
    pagamento:{
      type: DataTypes.STRING,
      allowNull: true
    },
    data:{
      type:DataTypes.DATE,
      allowNull: true
    }
  },
  {
     timestamps: false,
    
  })

  return agenda
}