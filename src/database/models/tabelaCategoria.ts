import { DataTypes } from "sequelize"
import { db } from "../instanciaDoBanco"

export const categorias = db.define('categorias',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
     timestamps: false,
  })