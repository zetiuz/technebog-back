import { Router } from "express";
import {
  getContactos,
  createContacto,
  updateContacto,
  getContacto,
  deleteContacto,
} from "../controllers/contacto.controller.js";

const router = Router();

// Routes
router.post("/Contactos", createContacto);
router.get("/Contactos", getContactos);
router.put("/Contactos/:id", updateContacto);
router.delete("/Contactos/:id", deleteContacto);
router.get("/Contactos/:id", getContacto);


export default router;