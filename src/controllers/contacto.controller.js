import { Contacto } from "../models/Contacto.js";

export const getContactos = async (req, res) => {
  try {
    const contactos = await Contacto.findAll();
    res.json({ contactos });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createContacto = async (req, res) => {
  try {
    const { name, numeroCuenta, descripcion, usuarioId } = req.body;
    const newContacto = await Contacto.create({
      name,
      numeroCuenta,
      descripcion,
      usuarioId,
    });
    res.json(newContacto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getContacto = async (req, res) => {
  const { id } = req.params;
  try {
    const contacto = await Contacto.findOne({
      where: {
        id,
      },
    });
    if (!contacto) {
      return res.status(404).json({ message: "Contacto no encontrado" });
    }
    res.json(contacto);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateContacto = async (req, res) => {
  try {
    const { id } = req.params;
    const contacto = await Contacto.findOne({
      where: { id },
    });
    contacto.set(req.body);
    await contacto.save();

    return res.json(contacto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteContacto = async (req, res) => {
  const { id } = req.params;
  try {
    const { id } = req.params;
    await Contacto.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/*export async function getContactoContacto(req, res) {
  const { id } = req.params;
  try {
    const Contacto = await Contacto.findAll({
      attributes: ["id", "ContactoId", "name", "numeroCuenta", "descripcion"],
      where: { ContactoId: id },
    });
    res.json(Contacto);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}*/
