const express = require('express');
const router = express.Router();

const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const userController = require('../controllers/userController');
const userSchemas = require('../models/joi/usersSchemas')

router.get('/',
    joiSchemaValidation.validate(userSchemas.getAll, 'query'),
    userController.getAll);

router.post('/create',
    joiSchemaValidation.validate(userSchemas.createUser, 'body'),
    userController.create);

module.exports = router;