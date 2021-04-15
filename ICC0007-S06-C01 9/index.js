const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connection = require('./database/connection');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection.createConnection();

app.use('/api/v1/movie', require('./routes/userRoutes'));

app.listen(process.env.PORT, function() {
    console.log(`Example app listening on port ${process.env.PORT}`)
})