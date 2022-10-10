"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class session extends sequelize_1.Model {
}
exports.default = session;
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
//# sourceMappingURL=sessionModel.js.map