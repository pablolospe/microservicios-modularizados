const { catchedAsync } = require("../utils")

module.exports = {
    getFilms: catchedAsync(require("./getFilms")),
    getOneFilm: catchedAsync(require("./getOneFilm")),
    deleteFilm: catchedAsync(require("./deleteFilm")),
    createFilm: catchedAsync(require("./createFilm")),
    updateFilm: catchedAsync(require("./updateFilm")),
}