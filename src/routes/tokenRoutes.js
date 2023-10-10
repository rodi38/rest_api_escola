import { Router } from 'express';
import tokenController from '../controllers/TokenController';
// import alunoController from '../controllers/AlunoController';

const router = new Router();

router.post('/', tokenController.store);
// router.get('/aluno', alunoController.index);

export default router;
