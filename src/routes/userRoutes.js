import { Router } from 'express';

import * as userController from '../controllers/users';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', userController.fetchAll);

router.get('/:id', userController.getById)
export default router;
