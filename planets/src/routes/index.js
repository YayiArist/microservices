const {Router} = require('express')
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router()

router.get('/planets', controllers.getPlanets)
router.post('/planets', middlewares.planetValidation, controllers.createPlanets)// queda la ruta el middleware validador y luego el controlador en caso de que no haya error

module.exports = router