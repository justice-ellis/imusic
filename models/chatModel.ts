import { Model, Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize('postgres://kssedoqqiyvxpe:7bbb52724c76273522a318be897abb2fbb0a97a6269abbe7adaffb5625efbcbd@ec2-54-204-56-171.compute-1.amazonaws.com:5432/db5mnv0a5g893u') // Example for postgres


export default class chat extends Model {
    public id!: string;
    public senderId!: number;
    public receiverId!: number;
}


export const mapChat = (sequelize: Sequelize) => {
    chat.init({
      id: {
      type: DataTypes.STRING, 
      primaryKey: true
      },
      senderId: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      recieverId: {
        type: DataTypes.BIGINT,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'chat',
      timestamps: true
    });
    chat.sync();
  }