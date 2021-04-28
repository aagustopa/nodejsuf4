const mongoose = require('mongoose');

const droneSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
})

module.exports = mongoose.model('Drone', droneSchema);

// module.exports = mongoose.model('Drone', mongoose.Schema{
//     email:String,
//     username:String,
// });