import { Model, Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize('postgres://kssedoqqiyvxpe:7bbb52724c76273522a318be897abb2fbb0a97a6269abbe7adaffb5625efbcbd@ec2-54-204-56-171.compute-1.amazonaws.com:5432/db5mnv0a5g893u') // Example for postgres


export default class User extends Model {
    declare id?: number;
    public name!: string;
    public email!: string;
    public password!: string;
}


export const mapUser = (sequelize: Sequelize) => {
    User.init({
      id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true,
      primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      sequelize,
      tableName: 'Users',
      timestamps: true
    });
    User.sync();
  }