import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/log', userController.index);

export default router;
