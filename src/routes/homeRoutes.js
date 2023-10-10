import { Router } from 'express';
import homeController from '../controllers/HomeController';
// import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', homeController.index);
// router.get('/aluno', alunoController.index);

export default router;
