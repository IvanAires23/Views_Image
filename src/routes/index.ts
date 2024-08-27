import { Router } from 'express';
import { uploadImage } from '../controllers';
import { validateBody } from '../middlewares/validationBody';
import { updateSchema } from '../schemas/schemaUpdate';

const router = Router();

router.post('/upload', validateBody(updateSchema), uploadImage);

export default router;
