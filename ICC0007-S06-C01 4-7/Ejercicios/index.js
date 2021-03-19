const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/api/v1/ejercicios', require('./routes/ejercicioRoutes'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})