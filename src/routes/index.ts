import { Router } from 'express';
import uploadController from '../controllers/uploadController';
import { validateBody } from '../middlewares/validationBody';
import { updateSchema } from '../schemas/schemaUpdate';
import { confirmSchema } from '../schemas/schemaConfirm';
import confirmController from '../controllers/confirmController';

const router = Router();

router.post('/upload', validateBody(updateSchema), uploadController.uploadImage);
router.patch('/confirm', validateBody(confirmSchema), confirmController.confirmPatch);

export default router;
