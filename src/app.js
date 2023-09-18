import express from "express";
import usuarioRoutes from "./routes/User.routes.js"
import ContactoRoutes from "./routes/Contacto.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(usuarioRoutes)
app.use(ContactoRoutes)
export default app;