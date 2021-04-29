const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    sinopsis: String,
    director: String,
    releasedDate: Date,
    actores: Array
})

module.exports = mongoose.model('Movie', movieSchema);