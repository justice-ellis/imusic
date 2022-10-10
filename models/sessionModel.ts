import { Model, Sequelize, DataTypes, UUIDV4 } from 'sequelize';


export default class session extends Model {
    declare id?: number;
    public name!: string;
    public description!: string;
    public ownerId!: string;
    public photo!: string;
    public participants!: any;
    
    public passwordResetToken!: string;
    public passwordResetExpires!: Date;
}


// export const mapUser = (sequelize: Sequelize) => {
//     User.init({
//       id: {
//       type: DataTypes.BIGINT, 
//       autoIncrement: true,
//       primaryKey: true
//       },
//       name: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//       },
//       email: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//         unique: true
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//     }, {
//       sequelize,
//       tableName: 'Users',
//       timestamps: true
//     });
//     User.sync();
 // }