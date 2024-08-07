import { DataTypes } from "sequelize"
import { db } from "../instanciaDoBanco"
import { funcionarios } from "./tabelaFuncionarios"
import { usuarios } from "./tabelaUsuarios"
import { servicos } from "./tabelaServicos"

export const agenda =  db.define('agenda',{
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
    usuarioId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
          model: usuarios,
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