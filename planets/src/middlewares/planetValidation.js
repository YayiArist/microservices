const {ClientError} = require('../utils/errors')

module.exports=( req, res, next)=>{// esta fn es un middleware y por tanto recinbe req, res y next
    const {name}= req.body;
    if(name)return netx() // si hay nombre retorna y continua
    else throw new ClientError("este es mi error", 401)
}

// esta fn la tengo que llevar al index de rutas