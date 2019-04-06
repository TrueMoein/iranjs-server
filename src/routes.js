import { Router } from 'express';

import userRoutes from './routes/userRoutes';
import registrationRoutes from './routes/registrationRoutes';

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
router.use('/register', registrationRoutes);

export default router;
