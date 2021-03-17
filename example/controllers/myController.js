module.exports.helloWorld = function(req, res) {
    let responseObj;
    let responseStatus;

    if (req.query.param1) {
        responseObj = {
            msg: 'Hello World!!'
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