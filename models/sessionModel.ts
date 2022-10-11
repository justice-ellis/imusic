import { Model, Sequelize, DataTypes, UUIDV4 } from 'sequelize';


export default class session extends Model {
    declare id?: number;
    public name!: string;
    public description!: string;
    public ownerId!: string;
    public photo!: string;
    public participants!: any;
}

