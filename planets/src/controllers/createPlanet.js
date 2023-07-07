const Planet = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const newPlanet = req.body;
    await Planet.create(newPlanet);
    response(res, 201, newPlanet);
}