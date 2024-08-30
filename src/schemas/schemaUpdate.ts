import Joi from 'joi';

export const updateSchema = Joi.object({
    image: Joi.string().base64().required().messages({
        'string.base': 'A imagem deve estar em formato base64.',
        'string.empty': 'A imagem é obrigatória.',
        'any.required': 'A imagem é um campo obrigatório.'
    }),
    customer_code: Joi.string().required().messages({
        'string.empty': 'O código do cliente é obrigatório.',
        'any.required': 'O código do cliente é um campo obrigatório.'
    }),
    measure_datetime: Joi.string().isoDate().required().messages({
        'string.base': 'A data/hora da medição deve ser uma string válida.',
        'string.empty': 'A data/hora da medição é obrigatória.',
        'string.isoDate': 'A data/hora da medição deve estar no formato ISO.',
        'any.required': 'A data/hora da medição é um campo obrigatório.'
    }),
    measure_type: Joi.string().valid('WATER', 'GAS').required().messages({
        'string.base': 'O tipo de medição deve ser uma string.',
        'string.empty': 'O tipo de medição é obrigatório.',
        'any.only': 'O tipo de medição deve ser "WATER" ou "GAS".',
        'any.required': 'O tipo de medição é um campo obrigatório.'
    })
});