import { Model, Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize('postgres://kssedoqqiyvxpe:7bbb52724c76273522a318be897abb2fbb0a97a6269abbe7adaffb5625efbcbd@ec2-54-204-56-171.compute-1.amazonaws.com:5432/db5mnv0a5g893u') // Example for postgres


export default class conversation extends Model {
    declare id?: number;
    public members!: [];
    public message!: string;
}


export const mapConversation = (sequelize: Sequelize) => {
    conversation.init({
      members: {
      type: DataTypes.ARRAY, 
      primaryKey: true
      },
      message: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'conversation',
      timestamps: true
    });
    conversation.sync();
  }