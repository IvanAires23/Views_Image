import Joi from 'joi';

export const confirmSchema = Joi.object({
    measure_uuid: Joi.string().uuid().required(),
    confirmed_value: Joi.number().integer().required()
});