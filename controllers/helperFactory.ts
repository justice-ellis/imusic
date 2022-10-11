import { NextFunction, Request, Response } from 'express';
import sequelize from 'sequelize';
import db from '../config/db';

export const getAll: any = async(req: Request, res: Response, table: any) => {
    try {

        const content = table.findAll()

        res.status(200).json({ content });

    } catch (error) {

        throw new Error("⚠ Error!")

    }
    
};
