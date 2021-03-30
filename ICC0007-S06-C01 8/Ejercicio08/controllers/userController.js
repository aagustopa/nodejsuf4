const userService = require('../services/userService');

module.exports.getAll = async function(req, res) {
    const response = { status: 500, msg: 'Server error' };
    try {
        const page = req.query.page || 2; //si no hay pagina espicificada será pagina 2 por defecto
        const resFromService = await userService.getAll(page);
        if (resFromService.status) {
            response.status = resFromService.status;
            response.msg = resFromService.msg;
        }
    } catch (err) {
        response.msg = err;
    }
    res.status(response.status).send(response);
}

module.exports.create = async function(req, res) {
    const response = { status: 500, msg: 'Server error' };
    try {
        const data = {
            name: req.body.name,
            job: req.body.job
        }
        const responseFromService = await userService.createUser(data);
        if (responseFromService.status) {
            response.body = responseFromService.result;
            response.msg = `User created succesfully`;
            response.data = responseFromService.msg;
            response.status = 201;
        }
    } catch (error) {
        response.error = error;
        console.log(`ERROR-userController-create: ${error}`);
    }
    res.status(response.status).send(response);
}