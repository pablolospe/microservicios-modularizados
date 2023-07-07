// const films = require("./films.json")
const axios = require('axios')

module.exports ={
    list: async () => {
        const result = await axios.get("http://database:8005/Film")
        return result.data;
    },

    create: async()=>{
        throw Error("Hay un error en la BDD al crear el film")
    }
}
