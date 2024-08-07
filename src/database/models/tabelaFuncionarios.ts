import { DataTypes } from "sequelize"
import { db } from "../instanciaDoBanco"
import { usuarios } from "./tabelaUsuarios"



export const funcionarios = db.define('funcionarios',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
          model: usuarios,
          key: 'id'
      }
  }
},{
  timestamps: false
})