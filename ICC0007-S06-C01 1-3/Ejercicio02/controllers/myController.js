module.exports.milisecondsDate = function(req, res) {
    const responseObj = {
        miliseconds: Date.now()
    }
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}

module.exports.normalDateFormar = function(req, res) {
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    const responseObj = {
        date: `${day}-${month}-${year}`
    }

    res.send(responseObj)
}

module.exports.hourDateFormat = function(req, res) {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    const responseObj = {
        date: `${hour}:${minute}:${second}`
    }

    res.send(responseObj);
}

module.exports.helloWorld = function(req, res) {
    let responseObj;
    let responseStatus;

    if (req.query.nom) {
        responseObj = {
            msg: `Hello ${req.query.nom}`
        }
        responseStatus = 200;
    } else {
        responseObj = {
            msg: 'Missing param'
        }
        responseStatus = 400;
    }
    res.status(responseStatus).send(responseObj);
}

module.exports.helloWorldBody = function(req, res) {
    let responseObj;
    let responseStatus;

    if (req.body.nom) {
        responseObj = {
            msg: `Hello ${req.body.nom}`
        }
        responseStatus = 200;
    } else {
        responseObj = {
            msg: 'Missing param'
        }
        responseStatus = 400;
    }
    res.status(responseStatus).send(responseObj);
}

module.exports.helloWorldParams = function(req, res) {
    let responseObj;
    let responseStatus;

    if (req.params.nom) {
        responseObj = {
            msg: `Hello ${req.params.nom}`
        }
        responseStatus = 200;
    } else {
        responseObj = {
            msg: 'Missing param'
        }
        responseStatus = 400;
    }
    res.status(responseStatus).send(responseObj);
}