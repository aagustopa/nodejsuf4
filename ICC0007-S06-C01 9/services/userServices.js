const axios = require('axios');
const Movie = require('../models/db/movieModel');
const crudRepository = require('../database/crudRepository');

module.exports = {
    create: async(dataFromController) => {
        const response = { status: false };
        try {
            const movie = new Movie(dataFromController);
            const responseFromDB = await crudRepository.save(movie);
            if (responseFromDB.status) {
                response.status = true;
                response.result = responseFromDB.result;
            } else {
                response.error = responseFromDB.error;
            }
        } catch (error) {
            response.error = error;
            console.log(`ERROR-userController-create ${error}`);
        }
        return response;
    }
}