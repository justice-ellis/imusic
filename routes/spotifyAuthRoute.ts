//import { getTrack } from "../controllers/spotifyAuth";

const express = require('express');
const { login, callback, getUser, refreshToken, getTrack } = require('../controllers/spotifyAuth')
const router = express.Router();


router
    .get('/login', login)
    //.get('/gettrack', getTrack)
//router
    //.post('/logged', logged, getUser)
// router
//    .get('/refreshToken', refreshToken)



export default router;