import { Request, Response } from 'express';
import httpStatus from 'http-status';
import confirmService from '../service/confirmService';

const confirmPatch = async (req: Request, res: Response) => {
    const { measure_uuid, confirmed_value } = req.body;

    try {
        const data = await confirmService.confirmValue(measure_uuid, confirmed_value)

        return res.status(httpStatus.OK).send(data);

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

const confirmController = { confirmPatch }

export default confirmController
