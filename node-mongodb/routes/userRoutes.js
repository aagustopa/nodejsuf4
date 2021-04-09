const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const userSchema = require('../models/joi/userSchema');

router.get('/',
    joiSchemaValidation.validate(userSchema.getAll, 'query'),
    userController.getAll);

router.post('/create',
    joiSchemaValidation.validate(userSchema.create, 'body'),
    userController.create);

module.exports = router;