// const planets = require("./planets.json")
const axios = require('axios');

module.exports ={
    list: async () => {
        const result = await axios.get("http://database:8005/Planet")
        return result.data
    },
    get: async (id) => {
        const result = await axios.get(`http://database:8005/Planet/${id}`)
        return result.data
    },
    delete: async (id) => {
        const result = await axios.delete(`http://database:8005/Planet/${id}`)
        return result.data
    },
    create: async (data) => {
        const result = await axios.post("http://database:8005/Planet", data);
        return result.data;
    },
}