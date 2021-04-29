import { Router } from 'express';
import eventRoutes from './event';

const router = Router();

router.use('/events', eventRoutes);

export default router;
