const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { title } = req.body;
    if (title) return next();
    else throw new ClientError("Error en el título", 401)
}