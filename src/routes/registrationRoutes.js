import { Router } from 'express';

import * as preUserController from '../controllers/preUsers';

const router = Router();

/**
 * GET /api/register
 */

router.get('/token-validation/:token', preUserController.tokenValidation)

export default router;
