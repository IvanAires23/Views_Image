import { Request, Response } from 'express';
import service from '../service';
import httpStatus from 'http-status';


export const uploadImage = async (req: Request, res: Response) => {
    try {
        const { image, customer_code, measure_datetime, measure_type } = req.body;

        const data = await service.uploadService(measure_type, measure_datetime, customer_code, image)

        return res.status(200).send({
            image_url: data.fileUri,
            measure_value: data.measure_value,
            measure_uuid: data.measure_uuid
        });

    } catch (error) {
        console.log(error);

        return res.status(500).send(error);
    }
};
