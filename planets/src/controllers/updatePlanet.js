const Planet = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { id } = req.params
    const newPlanet = req.body;
    await Planet.update(id, newPlanet);
    response(res, 201, newPlanet);
}