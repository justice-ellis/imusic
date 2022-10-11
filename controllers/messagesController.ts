import db from '../config/db';
import { NextFunction, Request, Response } from 'express';
import { Model, DataTypes} from 'sequelize';
import privateMessage, { mapPrivatemessage } from '../models/privatemessagesModel';
import { QueryTypes } from 'sequelize';
import { text } from 'body-parser';
import conversation from '../models/conversationModel';
import sequelize from 'sequelize';

type M = {
    id: number;
    communicationId: string;
    senderId: number;
    receiverId: number;
    text: string;
    seen: boolean;
}

export const sendMessage = async (req: Request, res: Response) => {
    try {
        mapPrivatemessage(db);
        const message: M = {
            id: req.body.id,
            communicationId: req.body.communicationId,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            text: req.body.text,
            seen: req.body.seen,
        };

        if (!message.text) {
          throw new Error("⚠ Enter Message!")
        }  
        const a = Math.min(message.senderId, message.receiverId) 
        const b = Math.max(message.senderId, message.receiverId) 
        
        const conversation_id = a + '@' + b
        
        console.log(conversation_id)

        privateMessage.create({
            id: req.body.id,
            communicationId: conversation_id,
            senderId: req.body.senderId,
            receiveverId: req.body.receiverId,
            text: req.body.text,
            seen: req.body.seen,
        });
        
        console.log(conversation_id);

        //const conversation_id = await conversation.findByPk(req.body.communicationId);
        //console.log(conversation_id)
        // if(conversation_id !== null) {
        //     await conversation.update({ text: `${req.body.text}` }, {
        //         where: {
        //             communicationId: conversation_id
        //         }
        //       });
        //     return
        // }

        // if (conversation_id === null) {
        //     await conversation.create({
        //         id: `${conversation_id}`,
        //         members: `${[req.body.senderId, req.body.receiverId]}`,
        //         message: `${req.body.text}`
        //     });
        // } 


        res.status(200).json({ 'message': '✔ Message Sent Successfully 🎁'})
        
        //res.status(200).json({ 'message': 'Message Sent'})
        
    } catch (error) {
        throw new Error("⚠ Message Not Sent!")
    }
};

export const getMessage = async (req: Request, res: Response) => {
    mapPrivatemessage(db);
        const message: M = {
            id: req.body.id,
            communicationId: req.body.communicationId,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            text: req.body.text,
            seen: req.body.seen,
        };

    const conversation_id = message.senderId + '@' + message.receiverId

    const chat = await privateMessage.findAll({
        attributes: ['text']
    }); 
      
    console.log(chat);
    res.json({chat})
}