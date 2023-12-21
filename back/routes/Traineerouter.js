import { Router } from 'express';
import authMiddleware from '../middlewares/authmiddle.js';
import Traineecontroller from '../controllers/Trainee.js';
const traineeRouter = Router();
traineeRouter.post('/login',Traineecontroller.login);
traineeRouter.get('/login',authMiddleware,Traineecontroller.aftertoken);
traineeRouter.get('/profile',authMiddleware,Traineecontroller.loadProfile);
export default traineeRouter;
