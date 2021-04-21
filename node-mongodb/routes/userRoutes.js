const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const userSchema = require('../models/joi/userSchema');

router.get('/',
    joiSchemaValidation.validate(userSchema.getAll, 'query'),
    userController.getAll);

router.get('/details/:id',
    joiSchemaValidation.validate(userSchema.id, 'params'),
    userController.getById);

router.post('/create',
    joiSchemaValidation.validate(userSchema.create, 'body'),
    userController.create);

router.put('/update/:id',
    joiSchemaValidation.validate(userSchema.id, 'params'),
    joiSchemaValidation.validate(userSchema.update, 'body'),
    userController.update);

router.delete('/delete/:id',
    joiSchemaValidation.validate(userSchema.id, 'params'),
    userController.delete);

module.exports = router;