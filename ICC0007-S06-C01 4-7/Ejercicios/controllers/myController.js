module.exports.ejercicio04 = function(req, res) {
    let responseObj;
    let responseStatus;

    const response = { status: 500, obj: {} };
    const numero = req.query.numero;

    console.log(typeof numero, numero);
    response.status = 200;
    response.obj.result = numero;
    res.status(response.status).send(response.obj);
}

module.exports.ejercicio05 = function(req, res) {
    let responseObj;
    let responseStatus;

    if (req.query.numero) {
        responseObj = {
            msg: `${num}`
        }
        responseStatus = 200;
    } else {
        responseObj = {
            msg: `Missing param`
        }
        responseStatus = 400;
    }
    res.status(responseStatus).send(responseObj);
}

module.exports.ejercicio06 = function(req, res) {
    let responseObj;
    let responseStatus;

    if (req.query.numero) {
        responseObj = {
            msg: `${num}`
        }
        responseStatus = 200;
    } else {
        responseObj = {
            msg: `Missing param`
        }
        responseStatus = 400;
    }
    res.status(responseStatus).send(responseObj);
}

module.exports.ejercicio07 = function(req, res) {
    let responseObj;
    let responseStatus;

    if (req.query.numero) {
        responseObj = {
            msg: `${num}`
        }
        responseStatus = 200;
    } else {
        responseObj = {
            msg: `Missing param`
        }
        responseStatus = 400;
    }
    res.status(responseStatus).send(responseObj);
}