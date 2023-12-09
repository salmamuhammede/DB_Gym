import { Router } from 'express';
import authMiddlewarestaff from '../middlewares/authmiddlestaff.js';
import trainercontroller from '../controllers/Trainers.js';
const trainerRouter = Router();
trainerRouter.get('/profile',authMiddlewarestaff,trainercontroller.loadProfile);
trainerRouter.get('/specializations',authMiddlewarestaff,trainercontroller.getSepclization);
export default trainerRouter;
