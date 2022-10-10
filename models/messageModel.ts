import { Model, Sequelize, DataTypes } from 'sequelize';


export default class message extends Model {
    declare communicationId?: number;
    public senderId!: string;
    public receiveverId!: string;
    public text!: string;
    public seen!: boolean;
}


export const mapMessage = (sequelize: Sequelize) => {
    message.init({
      communicationId: {
      type: DataTypes.BIGINT, 
      autoIncrement: true,
      primaryKey: true
      },
      senderId: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      receiveverId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      seen: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    }, {
      sequelize,
      tableName: 'message',
      timestamps: true
    });
    message.sync();
};