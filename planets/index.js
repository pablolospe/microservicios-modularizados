const server = require("./src/server");

const PORT = 8003

server.listen(PORT, () => {
    console.log(`Planets services listening on port ${PORT}`);
})

