const express = require('express');
const router = express.Router();

const myController = require('../controllers/myController');
const myMiddleware = require('../middlewares/middlewareEx4');

router.get('/ex4', myMiddleware.checkNumber, myController.ejercicio04);
router.get('/ex5', myController.ejercicio05);
router.get('/ex6', myController.ejercicio06);
router.get('/ex7', myController.ejercicio07);

module.exports = router;