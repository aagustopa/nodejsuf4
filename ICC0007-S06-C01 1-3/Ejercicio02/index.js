const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: true })); //si quiero coger los datos del formulario
app.use(bodyParser.json()); //si quiero coger los datos desde json

app.use('/api/v1/exemple', require('./routes/exempleRoutes'));
app.use('/api/v1/exercici2', require('./routes/exerciciRoutes'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})