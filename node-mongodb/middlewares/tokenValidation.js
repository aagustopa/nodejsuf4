const jwt = require('jsonwebtoken');

module.exports.validate = (req, res, next) => {
    const response = { status: 400 };
    const bearerHeader = req.headers.authorization;
    if (bearerHeader && bearerHeader.split(' ')[0] === 'Bearer' && bearerHeader.split(' ')[1]) {
        const token = bearerHeader.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            req.token = decodedToken;
            console.log(decodedToken);
            next();
        } catch (err) {
            response.msg = 'Invalid token!';
            res.status(response.status).send(response);
        }
    } else {
        response.msg = 'Missing Bearer token';
        res.status(response.status).send(response);
    }
};

module.exports.checkId = (req, res, next) => {
    const response = { status: 400 };
    const tokenId = req.token.id;
    const userId = req.params.id;
    if (tokenId === userId) {
        next();
    } else {
        response.status = 403;
        response.msg('You are not allowed to update this user');
        res.status(response.status).send(response);
    }
}