const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const data = req.body
    await Film.create(data)
    response(res, 200, data)
}