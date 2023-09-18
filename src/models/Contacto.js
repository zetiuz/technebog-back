import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Contacto = sequelize.define(
  "Contactos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    numeroCuenta: {
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
