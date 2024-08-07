import { DataTypes } from "sequelize"
import { db } from "../instanciaDoBanco"
import { usuarios } from "./tabelaUsuarios"


export const estabelecimentos = db.define('estabelecimentos',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
      type: DataTypes.STRING,
      allowNull: true
    },
    cep:{
      type: DataTypes.INTEGER,
      allowNull: true
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