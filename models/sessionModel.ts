import { Model, Sequelize, DataTypes, UUIDV4 } from 'sequelize';
const sequelize = new Sequelize('postgres://kssedoqqiyvxpe:7bbb52724c76273522a318be897abb2fbb0a97a6269abbe7adaffb5625efbcbd@ec2-54-204-56-171.compute-1.amazonaws.com:5432/db5mnv0a5g893u') // Example for postgres


export default class session extends Model {
    declare id?: number;
    public name!: string;
    public description!: string;
    public ownerId!: string;
    public photo!: string;
    public participants!: any;
}

