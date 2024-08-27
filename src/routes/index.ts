import { Router } from 'express';
import { uploadImage } from '../controllers';

const router = Router();

router.post('/', uploadImage);

export default router;
