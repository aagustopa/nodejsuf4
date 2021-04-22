const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    getAll: Joi.object({
        skip: Joi.number().integer().optional(),
        limit: Joi.number().integer().optional(),
    }).and('skip', 'limit'),
    create: Joi.object({
        email: Joi.string().email().required(),
        username: Joi.string().alphanum().required(),
    }),
    update: Joi.object({
        email: Joi.string().email(),
        username: Joi.string().alphanum(),
    }),
    id: Joi.object({
        id: Joi.objectId()
    })
}