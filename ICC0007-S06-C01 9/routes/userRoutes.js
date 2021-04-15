const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const movieSchema = require('../models/joi/movieSchema');

router.post('/create',
    joiSchemaValidation.validate(movieSchema.create, 'body'),
    movieController.create);

module.exports = router;