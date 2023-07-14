const express = require('express');
const morgan = require('morgan');


const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(require('./routes'))

server.use('*', (req, res)=>{ // si no encuentra ningun endpoint para la req debe enviar un 404
    res.status(400).send("not Found")
});

server.use((err, req, res, next) => {
res.status(err.statusCode || 500).send({error:true,
message: err.message
})
})

module.exports = server;