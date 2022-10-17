import { Model, Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('postgres://kssedoqqiyvxpe:7bbb52724c76273522a318be897abb2fbb0a97a6269abbe7adaffb5625efbcbd@ec2-54-204-56-171.compute-1.amazonaws.com:5432/db5mnv0a5g893u') // Example for postgres


export default class privateMessage extends Model {
    public id?: number; 
    public communicationId?: string;
    public senderId!: string;
    public receiverId!: string;
    public text!: string;
    public seen?: boolean;
}

export const mapPrivatemessage = (sequelize: Sequelize) => {
    privateMessage.init({
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true, 
        primaryKey: true
      },
      communicationId: {
      type: DataTypes.STRING, 
      },
      senderId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      receiveverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      seen: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
    }, {
      sequelize,
      tableName: 'privateMessage',
      timestamps: true
    });
    privateMessage.sync();
};