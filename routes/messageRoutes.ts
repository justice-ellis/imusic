import express from 'express';
import { getChat } from '../controllers/chatController';
import { sendMessage, getMessage } from '../controllers/messagesController';
import verifyjwt from '../middleware/verifyjwt';
const router = express.Router();

router.post('/chat', sendMessage);
router.get('/getchat', getChat);

export default router