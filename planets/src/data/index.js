// const planets = require("./planets.json")
const axios = require('axios');

module.exports ={
    list: async () => {
        const result = await axios.get("http://database:8005/Planet")
        return result.data
    },
    create: async () => {
        throw Error("Hay un error en la BBDD al momento de crear el planeta")
        }
}