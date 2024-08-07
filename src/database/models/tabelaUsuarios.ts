import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize"
import { db } from "../instanciaDoBanco"

class UsuarioModel extends Model<InferAttributes<UsuarioModel>, InferCreationAttributes<UsuarioModel>>{
  id!:number
  nome!:string
  email!:string
  telefone!:string
  senha!:string
}

export const usuarios = db.define<UsuarioModel>('usuarios',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
      type: DataTypes.STRING,
      allowNull: true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    telefone:{
      type: DataTypes.STRING,
      allowNull: true
    },
    senha:{
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
     timestamps: false,
    }
)

