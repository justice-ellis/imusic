require('dotenv').config();
import express from 'express';
const app = express();
import path from 'path';
import cookieSession = require('cookie-session');
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes';
import { verifyUser } from './controllers/verifyUserController';
import sequelize from './config/db';
import { registerUser } from './controllers/userController';
import message, { mapMessage } from './models/messageModel';
import db from './config/db';

const port = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users', verifyUser);



sequelize.authenticate().then(() => {
    console.log('connected to database successfully!'); 
}).catch(() => {
    console.log('DB connection failed');
})

//mapMessage(db);

app.listen(port, () => {
    console.log(`\n ⚡️ App listening at port ${port}!\n`);
});




