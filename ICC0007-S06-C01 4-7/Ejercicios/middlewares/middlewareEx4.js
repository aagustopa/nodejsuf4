module.exports.checkNumber = function(req, res, next) {
    if (req.query.numero) {
        req.query.numero = Number.parseInt(req.query.numero, 10);
        console.log(req.query.numero);
        if (!isNaN(req.query.numero)) {
            next();
        }
        const responseObj = { msg: 'Param NaN' };
        const responseStatus = 400;
        res.status(responseStatus).send(responseObj);
    }
    const responseObj = { msg: 'Missing param' };
    const responseStatus = 400;
    res.status(responseStatus).send(responseObj);
}