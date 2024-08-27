import { Request, Response } from 'express';
import service from '../service';
import httpStatus from 'http-status';


export const uploadImage = async (req: Request, res: Response) => {
    try {
        const { base64Image, customer_code, measure_datetime, measure_type } = req.body;

        if (!base64Image || !customer_code || !measure_datetime || !measure_type) {
            return res.status(httpStatus.BAD_REQUEST).send({
                error_code: "INVALID_DATA",
                error_description: "Todos os parâmetros são obrigatórios."
            });
        }

        if (measure_type !== "WATER" && measure_type !== "GAS") {
            return res.status(httpStatus.BAD_REQUEST).send({
                error_code: "INVALID_DATA",
                error_description: "measure_type deve ser 'WATER' ou 'GAS'."
            });
        }

        const data = await service.uploadService(measure_type, measure_datetime, customer_code, base64Image)

        return res.status(200).send({
            image_url: data.fileUri,
            measure_value: data.measure_value,
            measure_uuid: data.measure_uuid
        });

    } catch (error) {
        return res.status(500).send(error);
    }
};
