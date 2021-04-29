import { Router } from 'express';
import controller from './controller';

const router = Router();

router.get('/', controller.readEvents)

export default router;