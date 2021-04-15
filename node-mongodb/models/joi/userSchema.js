const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    getAll: Joi.object({
        page: Joi.number().integer().min(1).max(2)
    }),
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