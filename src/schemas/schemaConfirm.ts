import Joi from 'joi';

export const confirmSchema = Joi.object({
    customer_code: Joi.string().required(),
    confirmed_value: Joi.number().integer().required()
});