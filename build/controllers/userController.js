"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.handleRefreshToken = exports.logIn = exports.registerUser = exports.getAllUsers = exports.SECRET_KEY = void 0;
require('dotenv').config();
const userModel_1 = __importStar(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../config/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.SECRET_KEY = "nanatetragramatonages";
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, userModel_1.mapUser)(db_1.default);
        const result = yield userModel_1.default.findAll();
        res.status(200).json({ users: result });
        console.log(result);
    }
    catch (error) {
        return res.status(500).send("⚠ Error found!");
    }
});
exports.getAllUsers = getAllUsers;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, userModel_1.mapUser)(db_1.default);
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };
        //console.log(user);
        if (!user.name || !user.email || !user.password) {
            res.status(409).json({ 'message': '⚠ Add all Fields!' });
        }
        const duplicate = yield userModel_1.default.findOne({ where: { email: user.email } });
        if (duplicate === null) {
            //encrypt the password
            const hashedPwd = yield bcrypt_1.default.hash(user.password, 10);
            //store the new user
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hashedPwd
            };
            userModel_1.default.create(newUser);
            console.log(newUser);
            return res.status(200).json({ 'message': `🤩🎀🎉🏆 User ${user.name} registered successfully !` });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.registerUser = registerUser;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, userModel_1.mapUser)(db_1.default);
        const user = {
            name: req.body.name,
            password: req.body.password,
        };
        if (!user.name || !user.password) {
            res.status(409).json({ 'message': '⚠ Add all Fields!' });
        }
        console.log(user);
        // find
        const userFound = yield userModel_1.default.findOne({ where: { name: user.name } }); //user present
        if (!userFound)
            return res.sendStatus(401).json({ 'message': '⚠ Unauthorized!' }); //Unauthorized 
        // evaluate password 
        const match = yield bcrypt_1.default.compare(user.password, userFound.password);
        //console.log(userFound);
        //console.log(match);
        if (match) {
            // create JWTs
            const accessToken = jsonwebtoken_1.default.sign({ "name": userFound.name }, exports.SECRET_KEY, { expiresIn: '30min' });
            const refreshToken = jsonwebtoken_1.default.sign({ "name": userFound.name }, exports.SECRET_KEY, { expiresIn: '10h' });
            //saving refreshToken with current user
            const currentUser = Object.assign(Object.assign({}, userFound), { accessToken });
            console.log(currentUser);
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 24 * 60 * 1000 });
            //res.json({ accessToken });
            //res.cookie('status', "Registered", { maxAge: 9000000000, httpOnly: true })
            res.status(200).json({
                'accessToken': accessToken,
                'message': `Authorized 🏆 Logged In!`
            });
        }
        else {
            res.sendStatus(401);
        }
        ;
    }
    catch (error) {
        console.error('⚠ Error Found!');
    }
    ;
});
exports.logIn = logIn;
const handleRefreshToken = (req, res) => {
    const cookies = req.cookies;
    res.send(cookies);
    //verify jwt presence in cookies
    //if (!cookies?.jwt ) return res.sendStatus(401).json({'message': 'All Good ✔ JwT Present!'}) //
    //console.log(cookies.jwt);
    // const refreshToken = cookies.jwt;
    // const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    // if (!foundUser) return res.sendStatus(403); //forbidden 
    // // evaluate jwt 
    // jwt.verify(
    //     refreshToken,
    //     process.env.REFRESH_TOKEN_SECRET,
    //     (err, decoded) => {
    //         if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
    //         const accessToken = jwt.sign(
    //             { "username": decoded.username },
    //             process.env.ACCESS_TOKEN_SECRET,
    //             { expiresIn: '30s' }
    //         );
    //         res.json({ accessToken });
    //     }
    // )
};
exports.handleRefreshToken = handleRefreshToken;
//# sourceMappingURL=userController.js.map