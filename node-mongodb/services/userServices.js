const axios = require('axios');
const Drone = require('../models/db/droneModel');
const crudRepository = require('../database/crudRepository');

module.exports = {
    getAll: async function(page) {
        try {
            const resFromServer = await axios(`https://reqres.in/api/users?page=${page}`);
            if (resFromServer.status === 200) {
                return {
                    status: resFromServer.status,
                    msg: resFromServer.data
                };
            }
            return {
                status: resFromServer.status,
                msg: 'ERROR'
            }
        } catch (err) {
            return {
                status: false,
                msg: err
            }
        }
    },
    create: async(dataFromController) => {
        const response = { status: false };
        try {
            const drone = new Drone(dataFromController);
            const responseFromDB = await crudRepository.save(drone);
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