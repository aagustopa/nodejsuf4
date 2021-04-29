// ^[A-Za-z]+$
const Joi = require('joi');

module.exports = {
    create: Joi.object({
        title: Joi.string().alphanum().min(2).max(50).required(),
        sinopsis: Joi.string().min(2).max(120).required(),
        director: Joi.string().pattern(new RegExp('^[A-Za-z ]+$')).min(3).max(20).required(), //solo letras (no numeros)
        releasedDate: Joi.date().required(),
        actores: Joi.array().items(
            Joi.object({
                firstName: Joi.string().min(3).max(20).pattern(new RegExp('^[A-Za-z ]+$')),
                lastName: Joi.string().min(3).max(20).pattern(new RegExp('^[A-Za-z ]+$')),
            })
        )
    })
}