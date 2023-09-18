import { Router } from "express";
import {
  getUsuarios,
  createUsuario,
  updateUsuario,
  getUsuario,
  deleteUsuario,
  getUsuarioContacto,
} from "../controllers/usuario.controller.js";

const router = Router();

// Routes
router.post("/Usuarios", createUsuario);
router.get("/Usuarios", getUsuarios);
router.put("/Usuarios/:id", updateUsuario);
router.delete("/Usuarios/:id", deleteUsuario);
router.get("/Usuarios/:id", getUsuario);

router.get("/:id/Contacto", getUsuarioContacto);

export default router;
