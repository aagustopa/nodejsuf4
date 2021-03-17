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