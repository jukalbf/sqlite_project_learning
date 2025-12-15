import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelizeConnection.js";

class PersonModel extends Model {}

PersonModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },   
    },
    {
        sequelize,
        modelName: "Person",
    }
)

export default PersonModel;