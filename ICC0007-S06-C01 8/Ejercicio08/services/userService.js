const axios = require('axios');

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
    }
}