const express = require('express');
const router = express.Router();

const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const userController = require('../controllers/userController');
const userSchemas = require('../models/joi/usersSchemas')

router.get('/',
    joiSchemaValidation.validate(userSchemas.getAll, 'query'),
    userController.getAll);

module.exports = router;