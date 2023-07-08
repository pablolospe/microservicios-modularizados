const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params
    const data = req.body
    await Character.update(id, data);
    response(res, 200, data)
}