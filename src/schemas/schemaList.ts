import Joi from 'joi';

export const listSchema = Joi.object({
    customer_code: Joi.string().required().messages({
        'string.base': 'O código do cliente deve ser uma string.',
        'string.empty': 'O código do cliente é obrigatório.',
        'any.required': 'O código do cliente é um campo obrigatório.'
    })
});