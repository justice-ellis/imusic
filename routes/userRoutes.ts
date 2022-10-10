import express from 'express';
import { 
    getAllUsers, 
    registerUser,
    logIn,
    handleRefreshToken 
} from '../controllers/userController';
import verifyjwt from '../middleware/verifyjwt'
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', logIn);
router.get('/refresh', handleRefreshToken);

router.get('/', verifyjwt,getAllUsers);

//router.get('/chat', verifyjwt,getAllUsers); add chat controller

export default router;