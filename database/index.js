const server = require('./src/server');
const PORT = 8004;

const { Character, Film, Planet } = require('./src/database');

// Planet.get(1).then((res)=> console.log(res));
Planet.list().then((res)=> console.log(res[0]));
Film.list().then((res)=> console.log(res[0]));
Character.list().then((res)=> console.log(res[0]));
// Character.get(204).then((res) => console.log(res));
// Character.insert({
//   _id: "207",
//   name: "Pablo Wan Kenopi",
//   birth_year: "1981",
// }).then((res) => console.log(res));

server.listen(8004, () => {
  console.log(`Database service on port ${PORT}`);
});
