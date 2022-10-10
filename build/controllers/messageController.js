"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMessage = void 0;
const db_1 = __importDefault(require("../config/db"));
const messageModel_1 = require("../models/messageModel");
const newMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, messageModel_1.mapMessage)(db_1.default);
        const message = {
            communicationId: req.body.communicationId,
            senderId: req.body.senderId,
            receiveverId: req.body.receiveverId,
            text: req.body.text,
            seen: req.body.seen,
        };
        if (!message.text) {
            res.status(409).json({ 'message': '⚠ Enter Message!' });
        }
        if (message.text) {
        }
    }
    catch (error) {
    }
});
exports.newMessage = newMessage;
//# sourceMappingURL=messageController.js.map