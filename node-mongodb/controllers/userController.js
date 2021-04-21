const userService = require('../services/userServices');

module.exports.getById = async function(req, res) {
    const response = { status: 500, msg: 'Server error' };
    try {
        const userId = req.params.id;
        const responseFromService = await userService.getById(userId);
        if (responseFromService.status) {
            if (responseFromService.result) {
                response.body = responseFromService.result;
                response.msg = 'User fetched sucessfully';
                response.status = 200;
            } else {
                response.msg = 'User not found';
                response.status = 404;
            }
        }
    } catch (err) {
        response.msg = err;
        console.log(`ERROR-userController-getById ${err}`);
    }
    return res.status(response.status).send(response);
}

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
        const data = req.body;
        const responseFromService = await userService.create(data);
        if (responseFromService.status) {
            response.status = 201;
            response.msg = 'User created succesfully';
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


module.exports.update = async function(req, res) {
    const response = { status: 500, msg: 'Server Error' };
    try {
        const data = req.body;
        data.id = req.params.id;
        const responseFromService = await userService.update(data);
        if (responseFromService.status === 200) {
            response.msg = 'User updated successfully';
            response.body = responseFromService.result; //doc guardat
        } else if (responseFromService.status === 404) {
            response.msg = 'User not found';
        } else {
            response.msg = responseFromService.error;
        }
        response.status = responseFromService.status;
    } catch (err) {
        response.msg = err;
        console.log(`ERROR-userController-update: ${err}`);
    }
    res.status(response.status).send(response);
}

module.exports.delete = async(req, res) => {
    const response = { status: 500, msg: 'Server error' };
    try {
        const userId = req.params.id;
        const responseFromService = await userService.delete(userId);
        if (responseFromService.status === 200) {
            response.msg = 'User deleted sucessfully';
            response.body = responseFromService.result;
        } else if (responseFromService.status === 404) {
            response.msg = 'User not found';
        } else {
            response.msg = responseFromService.error;
        }
        response.status = responseFromService.status;
    } catch (err) {
        response.msg = err;
        console.log(`ERROR-userController-delete ${err}`);
    }
    return res.status(response.status).send(response);
}