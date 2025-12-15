import {sequelize} from "../../database/sequelizeConnection.js";
import PersonModel from "../models/personModel.js";

class PersonController {
    async getPeople(req, res) {
        try {
            const people = await PersonModel.findAll();
            
            return res.status(200).json(people);
        } catch (err) {
            return res.status(500).json({message: "Houve um erro de conexão.", error: err.message});
        } 
    }  
    
    async createPerson(req, res) {
        try {
            const { id, name, email } = req.body;
            
            if (!id || !name || !email) {
                console.error("Alguma entrada está faltando: id, nome ou email");
                return;
            }

            const newPerson = await PersonModel.build({id, name,  email});

            await newPerson.save();
            return res.json({"message": "Pessoa cadastrada com sucesso."});
        } catch (err) {
            return res.json({message: "Ouve um erro de conexão.", error: err.message});
        }
    }
}

export default PersonController;