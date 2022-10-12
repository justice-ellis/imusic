import express from 'express';
import { 
    getAllUsers, 
    registerUser,
    logIn,
    handleRefreshToken, 
    resetPassword
} from '../controllers/userController';
import verifyjwt from '../middleware/verifyjwt'
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', logIn);
router.post('/resetpassword', resetPassword);
router.get('/refresh', handleRefreshToken);

router.get('/', verifyjwt, getAllUsers);

//router.get('/chat', verifyjwt,getAllUsers); add chat controller

export default router;