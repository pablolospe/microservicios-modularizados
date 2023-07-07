const server = require('./src/server');
const PORT = 8005;

const { Character, Film, Planet } = require('./src/database');


server.listen(8005, () => {
  console.log(`Database service on port ${PORT}`);
});





// Character.list().then((res)=> console.log(res[0]));
// Film.list().then((res)=> console.log(res[0]));
// Planet.list().then((res)=> console.log(res[0]));
// Character.get(204).then((res) => console.log(res));
// Film.get(1).then((res) => console.log(res));
// Planet.get(1).then((res) => console.log(res));
// Character.insert({
//   _id: "207",
//   name: "Pablo Wan Kenopi",
//   birth_year: "1981",
// }).then((res) => console.log(res));
// Film.insert({
//   _id: "207",
//   title: "Revenge of the return",
// }).then((res) => console.log(res));
// Planet.insert({
//   _id: "100",
//   name: "Pableta Tierra",
// }).then((res) => console.log(res));
