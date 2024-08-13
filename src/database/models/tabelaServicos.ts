import { DataTypes } from "sequelize"
import { db } from "../instanciaDoBanco"

export const servicos = db.define('servicos',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
      type: DataTypes.STRING,
      allowNull: true
    },
    preco:{
      type: DataTypes.FLOAT,
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
    
  }
)