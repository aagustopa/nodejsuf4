const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const userSchemas = require('../models/joi/usersSchemas');

router.get('/',
    joiSchemaValidation.validate(userSchemas.getAll, 'query'),
    userController.getAll);
router.post('/create', userController.create);

module.exports = router;