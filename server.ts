require('dotenv').config();
import express from 'express';
const app = express();
import path from 'path';
import cookieSession = require('cookie-session');
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes';
import spotifyAuthRouter from './routes/spotifyAuthRoute';
import messageRoute from './routes/messageRoutes'
import { verifyUser } from './controllers/verifyUserController';
import sequelize from './config/db';
import { registerUser } from './controllers/userController';
import message, { mapPrivatemessage } from './models/privatemessagesModel';
import db from './config/db';

//app.listen(process.env.PORT || 3000)
//const port = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use("/api/v1/auth", spotifyAuthRouter)

app.use('/api/v1/users', userRouter);
app.use('/api/v1/message', messageRoute);


sequelize.authenticate().then(() => {
    console.log('connected to database successfully!'); 
}).catch(() => {
    console.log('DB connection failed');
})

//mapMessage(db);
//listen(process.env.PORT || 3000)

app.listen(process.env.PORT || 3000, () => {
    console.log(`\n ⚡️ App listening at port ${process.env.PORT}!\n`);
});




