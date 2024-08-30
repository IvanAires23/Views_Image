import { Request, Response } from "express";
import listService from "../service/listService";
import httpStatus from "http-status";
import { AppError } from "../errors";

async function getListReadings(req: Request, res: Response) {
    const { customer_code } = req.params
    const { measure_type } = req.query

    try {
        const response = await listService.getListReadings(customer_code, measure_type)
        res.status(httpStatus.OK).send(response)
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).send({
                error_description: error.message,
                error_code: error.error_code
            });
        }
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
    }
}

const listController = { getListReadings }

export default listController