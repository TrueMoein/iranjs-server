import { Router } from 'express';
import auth from '../middlewares/auth';

import * as userControllers from '../controllers/users';

const router = Router();

router.get('/profile', auth, userControllers.profile);

export default router;

