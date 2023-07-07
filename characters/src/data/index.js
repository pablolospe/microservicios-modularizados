// const characters = require("./characters.json");
const axios = require("axios")

module.exports = {
  list: async () => {
    const result = await axios.get("http://database:8005/Character")
    return result.data;
  },
  
  get: async (id) => {
    const result = await axios.get(`http://database:8005/Character/${id}`)
    return result.data;
  },

  create:async(data)=>{
    const result = await axios.post("http://database:8005/Character", data);
    return result.data;
  }
};