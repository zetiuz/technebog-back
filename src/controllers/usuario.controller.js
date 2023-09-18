import { Usuario } from "../models/Usuario.js";
import { Contacto } from "../models/Contacto.js";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json({ usuarios });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const { userName, name, email, password, number } = req.body;
    const newUsuario = await Usuario.create({
      userName,
      name,
      email,
      password,
      number,
    });
    res.json(newUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findOne({
      where: {
        id,
      },
    });
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findOne({
      where: { id },
    });
    usuario.set(req.body);
    await usuario.save();

    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const { id } = req.params;
    await Usuario.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function getUsuarioContacto(req, res) {
  const { id } = req.params;
  try {
    const contacto = await Contacto.findAll({
      where: { usuarioId: id },
    });
    res.json(contacto);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
