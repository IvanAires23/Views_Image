import { Router } from 'express';
import uploadController from '../controllers/uploadController';
import { validateBody } from '../middlewares/validationBody';
import { updateSchema } from '../schemas/schemaUpdate';
import { confirmSchema } from '../schemas/schemaConfirm';

const router = Router();

router.post('/upload', validateBody(updateSchema), uploadController.uploadImage);

export default router;
