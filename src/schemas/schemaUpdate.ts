import Joi from 'joi';

export const updateSchema = Joi.object({
    image: Joi.string().base64().required(),
    customer_code: Joi.string().required(),
    measure_datetime: Joi.string().isoDate().required(),
    measure_type: Joi.string().equal('WATER', 'GAS').required()
});