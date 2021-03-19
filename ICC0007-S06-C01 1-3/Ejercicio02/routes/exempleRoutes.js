const express = require('express');
const router = express.Router();

const myController = require('../controllers/myController');

router.get('/', myController.helloWorld);
router.post('/body', myController.helloWorldBody);
router.get('/params/:nom', myController.helloWorldParams);


module.exports = router;