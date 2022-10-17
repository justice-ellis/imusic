require('dotenv').config();
import { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import { Sequelize } from 'sequelize';
import User,  {mapUser} from '../models/userModel';
import jwt, {Secret} from 'jsonwebtoken';
import db from '../config/db';
import bcrypt from 'bcrypt';
import { getErrorMessage } from '../middleware/errorHandler';


export const SECRET_KEY: Secret = "nanatetragramatonages";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
      mapUser(db);
        const result = await User.findAll();
        res.status(200).json({ users: result });
        console.log(result);

    }catch (error) {
      return res.status(500).send("⚠ Error found!");
    }
}

type U = {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (req: Request, res: Response) => {
    try {
        mapUser(db);
        const user: U = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };

        //console.log(user);

        if (!user.name || !user.email || !user.password) {
            res.status(409).json({'message': '⚠ Add all Fields!'}) 
        }  
        
        const duplicate = await User.findOne({where: {email: user.email}});
       
        if (duplicate === null) {

            //encrypt the password
            const hashedPwd = await bcrypt.hash(user.password, 10);
            
            //store the new user
            const newUser: U = {
                name: req.body.name,
                email: req.body.email,
                password: hashedPwd
            }

            User.create(newUser);

            console.log(newUser);

           return res.status(200).json({'message': `🤩🎀🎉🏆 User ${user.name} registered successfully !`}); 
        }
  
    }catch (err) {
        console.log(err);
    }

};

type L = {
    name: string;
    password: string;
}

export const logIn = async(req:Request, res: Response) => {
    try {
        mapUser(db);
        const user: L = {
            name: req.body.name,
            password: req.body.password,
        };

        if (!user.name || !user.password) {
            res.status(409).json({'message': '⚠ Add all Fields!'}) 
        }  

        console.log(user);
        
        // find
        const userFound = await User.findOne({where: {name: user.name}}); //user present

        if (!userFound) return res.sendStatus(401).json({'message': '⚠ Unauthorized!'}) //Unauthorized 

        // evaluate password 
        const match: boolean = await bcrypt.compare(user.password, userFound.password);

        //console.log(userFound);
        //console.log(match);
        
        if (match) {
            // create JWTs
            const accessToken =  jwt.sign(
                {"name": userFound.name},
                SECRET_KEY,
                { expiresIn: '9h' }
            );
    
            const refreshToken =  jwt.sign(
                {"name": userFound.name},
                SECRET_KEY,
                { expiresIn: '10h' }
            );

            //saving refreshToken with current user
            const currentUser = {...userFound, accessToken}

            console.log(currentUser);
    
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 24 * 60 * 1000});
            //res.json({ accessToken });
            //res.cookie('status', "Registered", { maxAge: 9000000000, httpOnly: true })
            res.status(200).json({
                'accessToken': accessToken,
                'message': `Authorized 🏆 Logged In!`})
        } else {
            res.sendStatus(401);
        };
        
        
    } catch (error) {
        console.error('⚠ Error Found!')
    };
        
};

type P = {
    name: string;
    email: string;
    newPassword: string;
}

export const resetPassword = async(req: Request, res: Response) => {
    try {
        mapUser(db);
        const user: P = {
            name: req.body.name,
            email: req.body.email,
            newPassword: req.body.newPassword
        };

        if (!user.name || !user.newPassword) {
            res.status(409).json({'message': '⚠ Add all Fields!'}) 
        }  

        const usernameFound = await User.findOne({where: {name: user.name}});
        const emailFound = await User.findOne({where: {email: user.email}});

        if (usernameFound && emailFound) {
            await User.destroy({ where: { email: user.email } });

            if (!user.name || !user.email || !user.newPassword) {
                res.status(409).json({'message': '⚠ Add all Fields!'}) 
            }  
            
            const duplicate = await User.findOne({where: {email: user.email}});
           
            if (duplicate === null) {
    
                //encrypt the password
                const hashedPwd = await bcrypt.hash(user.newPassword, 10);
                
                //store the new user
                const newUser: U = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPwd
                }
    
                User.create(newUser);
    
                console.log(newUser);
    
               return res.status(200).json({'message': `🤩🎀🎉🏆 Password changed successfully !`}); 
            } else {
                return new Error('⚠ Credentials already taken 🔒 Choose another!');
            }
      
        } 
        
        if (!usernameFound && !emailFound) {
           
            return res.status(200).json({'message': '⚠ Click Button to Register Now!'})

        }

    } catch (error) {
        
        res.status(404).json(getErrorMessage(error))
    }
};

export const handleRefreshToken = (req: Request, res: Response) => {
    const cookies = req.cookies;
    
    res.send(cookies)
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
}