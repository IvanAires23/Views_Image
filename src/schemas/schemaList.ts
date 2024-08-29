import Joi from 'joi';

export const listSchema = Joi.object({
    customer_code: Joi.string().required()
});