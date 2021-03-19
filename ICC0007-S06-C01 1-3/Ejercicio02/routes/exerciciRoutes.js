const express = require('express');
const router = express.Router();

const myController = require('../controllers/myController');

router.get('/mili', myController.milisecondsDate);
router.get('/day', myController.normalDateFormar);
router.get('/minute', myController.hourDateFormat);

module.exports = router;