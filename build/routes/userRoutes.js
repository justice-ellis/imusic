"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const verifyjwt_1 = __importDefault(require("../middleware/verifyjwt"));
const router = express_1.default.Router();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.logIn);
router.get('/refresh', userController_1.handleRefreshToken);
router.get('/', verifyjwt_1.default, userController_1.getAllUsers);
//router.get('/chat', verifyjwt,getAllUsers); add chat controller
exports.default = router;
//# sourceMappingURL=userRoutes.js.map