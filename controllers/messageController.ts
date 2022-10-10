import db from '../config/db';
import { NextFunction, Request, Response } from 'express';
import { mapMessage } from '../models/messageModel';

type M = {
    communicationId?: number;
    senderId: string;
    receiveverId: string;
    text: string;
    seen: string;
}

export const newMessage = async (req: Request, res: Response) => {
    try {
        mapMessage(db);
        const message: M = {
            communicationId: req.body.communicationId,
            senderId: req.body.senderId,
            receiveverId: req.body.receiveverId,
            text: req.body.text,
            seen: req.body.seen,
        };

        if (!message.text) {
            res.status(409).json({'message': '⚠ Enter Message!'}) 
        }  
       
        if (message.text) {

        }
            
    } catch (error) {
        
    }
};
