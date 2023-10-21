import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, alunoController.index);
router.get('/:id', loginRequired, alunoController.show);
router.put('/:id', loginRequired, alunoController.update);
router.post('/', loginRequired, alunoController.store);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
