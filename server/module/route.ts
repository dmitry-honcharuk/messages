import { Router } from 'express';
import eventRoutes from './event';

const router = Router();

router.use('/event', eventRoutes);

export default router;