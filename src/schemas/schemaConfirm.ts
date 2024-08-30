import Joi from 'joi';

export const confirmSchema = Joi.object({
    measure_uuid: Joi.string().uuid().required().messages({
        'string.base': 'O UUID da medição deve ser uma string.',
        'string.empty': 'O UUID da medição é obrigatório.',
        'string.uuid': 'O UUID da medição deve ser um formato válido de UUID.',
        'any.required': 'O UUID da medição é um campo obrigatório.'
    }),
    confirmed_value: Joi.number().integer().required().messages({
        'number.base': 'O valor confirmado deve ser um número.',
        'number.integer': 'O valor confirmado deve ser um número inteiro.',
        'any.required': 'O valor confirmado é um campo obrigatório.'
    })
});