import { Router } from 'express';
import authMiddlewarestaff from '../middlewares/authmiddlestaff.js';
import Staffcontroller from '../controllers/Staff.js';
const staffRouter = Router();
staffRouter.post('/login',Staffcontroller.login);
staffRouter.get('/login',authMiddlewarestaff,Staffcontroller.aftertoken);
export default staffRouter;
