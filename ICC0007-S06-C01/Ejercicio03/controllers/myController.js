module.exports.getMultTable = function(req, res) {
    const response = { status: 500, obj: {} };
    const numero = req.query.numero;

    if (numero) {
        const arr = [];
        for (let i = 0; i <= 10; i++) {
            arr.push(numero * i);
        }
        response.status = 200;
        response.obj.result = arr;
    } else {
        response.status = 401;
        response.obj.msg = 'Missing param numero';
    }
    res.status(response.status).send(response.obj);
}