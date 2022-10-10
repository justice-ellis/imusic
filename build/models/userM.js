"use strict";
// 'use strict';
// import { Model, DataTypes, UUIDV4 } from 'sequelize';
// import bcrypt from 'bcrypt';
// //console.log(process.env.DB_NAME);
// interface UserAttributes {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
// }
// //ModelOptions<User>.hooks?: Partial<ModelHooks<User, any>> | undefined
// //
// module.exports = (sequelize: any, DataTypes: any) => {
//   class User extends Model <UserAttributes> implements UserAttributes{
//     id!: string;
//     name!: string;
//     email!: string;
//     password!: string;
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models: any) {
//       // define association here
//     }
//   }
//   var userSchema = sequelize.define("User", {
//     id: {
//       type: DataTypes.STRING, 
//       defaultValue: UUIDV4,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//    },
//    {
//     hooks: {
//      beforeCreate: async (user: User) => {
//       if (user.password) {
//        const salt = await bcrypt.genSaltSync(10, 'a');
//        user.password = bcrypt.hashSync(user.password, salt);
//       }
//      },
//      beforeUpdate:async (user: User) => {
//       if (user.password) {
//        const salt = await bcrypt.genSaltSync(10, 'a');
//        user.password = bcrypt.hashSync(user.password, salt);
//       }
//      }
//     },
//     // instanceMethods: {
//     //  validPassword: (password: string) => {
//     //   return bcrypt.compareSync(password, this.password);
//     //  }
//     // }
//    });
//    userSchema.prototype.validPassword = async (password: string, hash: string) => {
//     return await bcrypt.compareSync(password, hash);
//    }
//     return userSchema;
// /*
//   User.init({
//     id: {
//       type: DataTypes.STRING, 
//       defaultValue: UUIDV4,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//   }, {
//     hooks: {
//       beforeCreate: async (user: any) => {
//         if (user.password){
//          const salt:string = bcrypt.genSaltSync(10, 'a');
//          user.password = bcrypt.hashSync(user.password, salt);
//         }
//       },
//       beforeUpdate:async (user: any) => {
//         if (user.password) {
//          const salt = await bcrypt.genSaltSync(10, 'a');
//          user.password = bcrypt.hashSync(user.password, salt);
//         }
//        }
//       },
//     sequelize,
//     modelName: 'User',
//   }
//   );
// */
//   /*
//   User.init({
//     id: {
//       type: DataTypes.STRING, 
//       defaultValue: UUIDV4,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//   }, 
//  {sequelize, modelName: 'User' });
//   return User;
//   */
// };
//# sourceMappingURL=userM.js.map