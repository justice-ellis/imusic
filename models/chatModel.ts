import { Model, Sequelize, DataTypes} from 'sequelize';


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