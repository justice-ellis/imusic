import express from 'express';
import verifyjwt from '../middleware/verifyjwt';
const router = express.Router();

router.get('/chat', verifyjwt);