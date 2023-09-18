import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Contacto } from "./Contacto.js";

export const Usuario = sequelize.define(
  "Usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    saldo: {
      type: DataTypes.DECIMAL,
    },
    email: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

Usuario.hasMany(Contacto, {
  foreinkey: "UsuarioId",
  sourceKey: "id",
});
Contacto.belongsTo(Usuario, { foreinkey: "UsuarioId", targetId: "id" });
