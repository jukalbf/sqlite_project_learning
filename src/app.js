import express from "express";
import personRouter from "./routes/personRoutes.js";
import {Sequelize} from "sequelize";
import tryConnection, {sequelize} from "../database/sequelizeConnection.js";

const PORT = 8000;
const app = express();

app.use("/people", personRouter);
app.get("/", (req, res) => {
    return res.send(`Funcionando: http://locahost:${PORT}/people`);
});

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}: http://localhost:${PORT}/`);
    tryConnection();
});
