const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', require('./routes/userRoutes'));

app.listen(3000, function() {
    console.log('Server listening on port 3000 working!')
})