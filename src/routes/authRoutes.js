import { Router } from 'express';
import guest from '../middlewares/guest';

import * as authController from '../controllers/auth';

const router = Router();

router.post('/login', guest, authController.login);
router.post('/register', guest, authController.register);

export default router;

