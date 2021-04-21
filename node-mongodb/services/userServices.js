const axios = require('axios');
const Drone = require('../models/db/droneModel');
const crudRepository = require('../database/crudRepository');
const mongoose = require('mongoose');

module.exports = {
    getById: async(userId) => {
        const response = { status: false };
        try {
            const data = {
                _id: mongoose.Types.ObjectId(userId),
                model: Drone,
                projection: {
                    __v: false
                }
            };
            const responseFromDB = await crudRepository.findById(data);
            if (responseFromDB.status) {
                response.status = true;
                response.result = responseFromDB.result;
            }
        } catch (error) {
            console.log(`ERROR-userService-getById ${error}`)
        }
        return response;
    },
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
            console.log(`ERROR-userService-create ${error}`);
        }
        return response;
    },
    update: async(dataFromController) => {
        const response = { status: false };
        try {
            const data = {
                findQuery: {
                    _id: mongoose.Types.ObjectId(dataFromController.id)
                },
                model: Drone,
                projection: { __v: false },
                updateQuery: {}
            };
            if (dataFromController.email) data.updateQuery.email = dataFromController.email;
            if (dataFromController.username) data.updateQuery.username = dataFromController.username;

            const responseFromDB = await crudRepository.findOneAndUpdate(data);
            if (responseFromDB.status === 200) {
                response.result = responseFromDB.result;
            }
            response.status = responseFromDB.status;
        } catch (error) {
            response.error = error;
            console.log(`ERROR-userService-update: ${error}`);
        }
        return response;
    },
    delete: async(userId) => {
        const response = { status: false };
        try {
            const data = {
                findQuery: {
                    _id: mongoose.Types.ObjectId(userId)
                },
                model: Drone,
                projection: {
                    __v: false
                }
            };
            const responseFromDB = await crudRepository.findOneAndDelete(data);
            if (responseFromDB.status === 200) {
                response.result = responseFromDB.result;
            } else {
                response.error = responseFromDB.error;
            }
            response.status = responseFromDB.status;
        } catch (error) {
            response.error = error;
            console.log(`ERROR-userService-delete ${error}`);
        }
        return response;
    }
}