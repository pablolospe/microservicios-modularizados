const planets = require("./planets.json")

module.exports ={
    list: async () => {
        return planets
    },
    create: async () => {
        throw Error("Hay un error en la BBDD al momento de crear el planeta")
        }
}