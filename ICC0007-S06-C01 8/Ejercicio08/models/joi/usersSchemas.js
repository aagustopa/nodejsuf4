const Joi = require('joi');

module.exports = {
    getAll: Joi.object({
        page: Joi.number().integer().min(1).max(2)
    }),
    createUser: Joi.object({
        name: Joi.string().alphanum().max(20).min(3).required(),
        job: Joi.string().max(50).min(5).required()
    })
}