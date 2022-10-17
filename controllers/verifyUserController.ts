require('dotenv').config();
import { NextFunction, Request, Response } from 'express';
import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('postgres://kssedoqqiyvxpe:7bbb52724c76273522a318be897abb2fbb0a97a6269abbe7adaffb5625efbcbd@ec2-54-204-56-171.compute-1.amazonaws.com:5432/db5mnv0a5g893u') // Example for postgres
const cookieParser = require ('cookie-parser');
import jwt, {Secret} from 'jsonwebtoken';
import User, { mapUser } from '../models/userModel';
import { SECRET_KEY } from './userController';
import db from '../config/db';
import bcrypt from 'bcrypt';


export const verifyUser = async (req: Request, res: Response) => {

    const authHeader = req.cookies.body;
    console.log(authHeader);

    res.sendStatus(200).json({'message': `🏆 Your Status is ${authHeader}!`});
    // if (!authHeader) {
    //     return res.sendStatus(200).json({'message': '😊 Unregistered User!'});
    // } else {
    //     console.log(authHeader); //Bearer token
    //     return res.sendStatus(403).json({'message': '🏆 Registered User!'}); //invalid token
    // const token = authHeader.split(' ')[1];
    // jwt.verify(
    //     token,
    //     SECRET_KEY,
    //     (err, decoded) => {
    //         //if (err) return res.sendStatus(403).json({'message': '⚠ Error Occured!'}); //invalid token
    //         //if (decoded) return res.sendStatus(403).json({'message': '🏆 Registered User!'}); //invalid token
    //     }
    // )    
}
//};
