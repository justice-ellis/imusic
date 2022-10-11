import { Model, Sequelize, DataTypes } from 'sequelize';

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