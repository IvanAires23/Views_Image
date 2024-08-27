import { Request, Response } from 'express';
import httpStatus from 'http-status';
import uploadService from '../service/uploadService';

const uploadImage = async (req: Request, res: Response) => {
    try {
        const { image, customer_code, measure_datetime, measure_type } = req.body;

        const data = await uploadService.generateReading(measure_type, measure_datetime, customer_code, image)

        return res.status(httpStatus.OK).send({
            image_url: data.fileUri,
            measure_value: data.measure_value,
            measure_uuid: data.measure_uuid
        });

    } catch (error) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

const uploadController = { uploadImage }

export default uploadController
