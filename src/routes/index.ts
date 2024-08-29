import { Router } from 'express';
import uploadController from '../controllers/uploadController';
import { validateBody, validateParams } from '../middlewares/validationBody';
import { updateSchema } from '../schemas/schemaUpdate';
import { confirmSchema } from '../schemas/schemaConfirm';
import confirmController from '../controllers/confirmController';
import { listSchema } from '../schemas/schemaList';
import listController from '../controllers/listController';

const router = Router();

router.post('/upload', validateBody(updateSchema), uploadController.uploadImage);
router.patch('/confirm', validateBody(confirmSchema), confirmController.confirmPatch);
router.patch('/:customer_code/list', validateParams(listSchema), listController.getListReadings);

export default router;
