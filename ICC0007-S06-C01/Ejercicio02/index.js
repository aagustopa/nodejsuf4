const express = require('express');
const app = express();

const myController = require('./controllers/myController');

app.get('/mili', myController.milisecondsDate);
app.get('/day', myController.normalDateFormar);
app.get('/minute', myController.hourDateFormat);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})