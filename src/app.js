import express from "express";
import personRouter from "./routes/personRoutes.js";
import cors from "cors";
import tryConnection, {sequelize} from "../database/sequelizeConnection.js";

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/people", personRouter);
app.get("/", (req, res) => {
    return res.send(`Funcionando: http://locahost:${PORT}/people`);
});

tryConnection();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}: http://localhost:${PORT}/`);
});
