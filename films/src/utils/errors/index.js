class ClientError extends Error{
    constructor(message, statusCode = 400){
        super(message)// super llama a error y le pasa el mensaje 
        this.statusCode=statusCode
    }
}

// esta clase de error es para que cuando el error llegue al manejador de errorres tenga un status

module.exports = {ClientError}