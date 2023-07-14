const createCharacter = require('./createCharacter');
const {catchedAsync} = require('../utils')

module.exports= {
    getCharacters: catchedAsync( require('./getCharacters')), // ejecuto catchedAsync que recibe la fn Get y la ejecuta manejando el error
    createCharacters: catchedAsync( require('./createCharacter'))
}