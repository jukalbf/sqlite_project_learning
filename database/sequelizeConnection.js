import {Sequelize} from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./sqlite_project.db"
});

async function tryConnection() {
    try {
        await sequelize.authenticate();
        console.log("Banco autenticado com sucesso.");
        
        await sequelize.sync();
        console.log("Modelos sincronizados.");
    } catch (err) {
        console.log(`Erro ao tentar se conectar: ${err.message}`);
    }
}

export default tryConnection;