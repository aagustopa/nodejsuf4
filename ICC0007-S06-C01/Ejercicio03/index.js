const express = require('express');
const app = express();


const myController = require('./controllers/myController');

app.get('/multTable', myController.getMultTable);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})