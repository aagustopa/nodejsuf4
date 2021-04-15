const userServices = require('../services/userServices');

module.exports.getAllMovies = async function(req, res) {
    const response = { status: 500, msg: 'Internal server error' };
    try {

    } catch (err) {
        response.msg = err;
    }
    res.status(response.status).send(response);
}

module.exports.create = async(req, res) => {
    const response = { status: 500, msg: 'Internal server error' };
    try {
        const data = req.body;
        const responseFromService = await userServices.create(data);
        if (responseFromService.status) {
            response.status = 201;
            response.msg = 'Movie created succesfully';
            response.body = responseFromService.result;
        } else {
            response.msg = responseFromService.error;
        }
    } catch (err) {
        response.msg = err;
        console.log(`ERROR-userController-create ${err}`);
    }
    res.status(response.status).send(response);
}