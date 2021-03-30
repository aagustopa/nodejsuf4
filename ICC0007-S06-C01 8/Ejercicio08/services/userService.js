const axios = require('axios');
// const { func } = require('joi');

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
    createUser: async function(dataFromController) {
        try {
            const resFromServer = await axios(`https://reqres.in/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataFromController)
            })
            if (resFromServer.status === 201) {
                return {
                    status: resFromServer.status,
                    msg: resFromServer.data
                };
            }
            return {
                status: resFromServer.statuss,
                msg: 'ERROR-userService-create'
            }
        } catch (err) {
            return {
                status: false,
                msg: err
            }
        }
    }
}