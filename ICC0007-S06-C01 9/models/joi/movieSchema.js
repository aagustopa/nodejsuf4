// ^[A-Za-z]+$
const Joi = require('joi');

module.exports = {
    create: Joi.object({
        title: Joi.string().alphanum().min(2).max(50).required(),
        sinopsis: Joi.string().min(2).max(120).required(),
        director: Joi.string().pattern(new RegExp('^[A-Za-z ]+$')).min(3).max(20).required(), //solo letras (no numeros)
        releasedDate: Joi.date().required(),
        actores: Joi.array().items(
            Joi.object().keys({
                firstName: Joi.string().pattern(new RegExp('^[A-Za-z ]+$')).min(3).max(20),
                lastName: Joi.string().pattern(new RegExp('^[A-Za-z ]+$')).min(3).max(20),
            })
        )
    })
}