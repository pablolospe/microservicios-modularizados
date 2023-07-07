const Character = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const {id} = req.params
    console.log(id);
    const character = await Character.get(id);
    response(res, 200, character)
}