"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyjwt_1 = __importDefault(require("../middleware/verifyjwt"));
const router = express_1.default.Router();
router.get('/chat', verifyjwt_1.default);
//# sourceMappingURL=messageRoutes.js.map