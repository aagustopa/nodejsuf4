const Joi = require('joi');

module.exports = {
    getAll: Joi.object({
        page: Joi.number().integer().min(1).max(2)
    }),
    create: Joi.object({
        email: Joi.string().email().required(),
        username: Joi.string().alphanum().required(),
    })
}