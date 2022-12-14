require('dotenv').config();
import express from 'express';
const app = express();
import path from 'path';
import userRouter from './routes/userRoutes';
import spotifyAuthRouter from './routes/spotifyAuthRoute';
import messageRoute from './routes/messageRoutes'
import { verifyUser } from './controllers/verifyUserController';
import sequelize from './config/db';
import { registerUser } from './controllers/userController';
import message, { mapPrivatemessage } from './models/privatemessagesModel';
import db from './config/db';

const port: any = process.env.PORT || 3001;
const host = process.env.YOUR_HOST || '0.0.0.0';

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
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

app.listen(port, host, () => {
    console.log(`\n ⚡️ App listening at port ${process.env.PORT}!\n`);
});



