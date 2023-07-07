const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const data = req.body
    await Character.create(data);
    response(res, 200, data)
}