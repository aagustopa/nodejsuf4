const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors()); //evitar que puedan acceder desde otros dominis

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', require('../exemple-npm/routes/userRoutes'))

app.listen(process.env.PORT, function() {
    console.log(`Example app listening on port ${process.env.PORT}!`);
})