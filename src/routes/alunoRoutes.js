import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.put('/:id', alunoController.update);
router.post('/', alunoController.store);
router.delete('/:id', alunoController.delete);

export default router;
