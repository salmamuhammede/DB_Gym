import { Router } from 'express';
import branchescontroller from '../controllers/bracnhes.js';
const branchRouter = Router();
branchRouter.get('/',branchescontroller.fineall);
branchRouter.post('/',branchescontroller.insertBranch);

export default branchRouter;
