const server = require("./src/server");

const PORT = 8004

server.listen(8004, ()=>{
    console.log(`Database service on port ${PORT}`);
})