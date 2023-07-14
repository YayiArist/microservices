const createFilm = require('./createFilm');
const {catchedAsync} = require('../utils')


module.exports = {
    getFilms: catchedAsync(require('./getFilms')),
    createFilm: catchedAsync(require('./createFilm'))
}