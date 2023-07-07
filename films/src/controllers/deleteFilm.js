const Films = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  const film = await Films.delete(id);
  response(res, 200, film);
};


// const Character = require("../data")
// const { response } = require("../utils")

// module.exports = async (req, res) => {
//     const {id} = req.params
//     const character = await Character.delete(id);
//     response(res, 200, character)
// }