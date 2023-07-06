// const characters = require("./characters.json");
const axios = require("axios")

module.exports = {
  list: async () => {
    const result = await axios.get("http://database:8005/Character/207")
    return result.data;
  },

  create:async()=>{
    throw Error("Hay un error en la creacion del personaje")
  }
};