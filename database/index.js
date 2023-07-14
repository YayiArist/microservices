const server = require('./src/server')
const { PORT } = require("./src/config/envs");


server.listen(PORT, ()=>{
console.log(`database service listening on port ${PORT}`)
})