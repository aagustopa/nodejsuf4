const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    fs.readFile('./public/index.html', null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.write(data)
        }
        res.end();
    });
})

app.use('/api/v1/exemple', require('./routes/exempleRoutes'));
app.use('/api/v1/exercici2', require('./routes/exerciciRoutes'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})