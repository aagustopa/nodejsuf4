const express = require('express');
const app = express();

const myController = require('./controllers/myController');

app.get('/', myController.helloWorld);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})