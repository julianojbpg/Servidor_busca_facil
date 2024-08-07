import { DataTypes } from "sequelize"
import { db } from "../instanciaDoBanco"
import { funcionarios } from "./tabelaFuncionarios"
import { servicos } from "./tabelaServicos"


export const funcionariosServicos = db.define('funcionariosservicos',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    funcionarioId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
          model: funcionarios,
          key: 'id'
      }
    },
    servicoId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
          model: servicos,
          key: 'id'
      }
    }
  },
  {
    tableName: 'funcionariosservicos',
     timestamps: false,
  })