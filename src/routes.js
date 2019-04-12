import { Router } from 'express';

import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;
