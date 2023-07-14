const createPlanets = require('./createPlanets');
const {catchedAsync} = require('../utils')

module.exports= {
    getPlanets: catchedAsync( require('./getPlanets')), // ejecuto catchedAsync que recibe la fn Get y la ejecuta manejando el error
    createPlanets: catchedAsync( require('./createPlanets'))
}

