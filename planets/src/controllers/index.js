const { catchedAsync } = require("../utils")

module.exports = {
    getPlanets: catchedAsync(require("./getPlanets")),
    getOnePlanet: catchedAsync(require("./getOnePlanet")),
    deletePlanet: catchedAsync(require("./deletePlanet")),
    createPlanet: catchedAsync(require("./createPlanet")),
    updatePlanet: catchedAsync(require("./updatePlanet")),
}