"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMessage = void 0;
const sequelize_1 = require("sequelize");
class message extends sequelize_1.Model {
}
exports.default = message;
const mapMessage = (sequelize) => {
    message.init({
        communicationId: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        senderId: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false
        },
        receiveverId: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        text: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        seen: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'message',
        timestamps: true
    });
    message.sync();
};
exports.mapMessage = mapMessage;
//# sourceMappingURL=messageModel.js.map