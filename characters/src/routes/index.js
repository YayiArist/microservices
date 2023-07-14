const {Router} = require('express')
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router()

router.get('/characters', controllers.getCharacters)
router.post('/characters', middlewares.characterValidation, controllers.createCharacters)// queda la ruta el middleware validador y luego el controlador en caso de que no haya error

module.exports = router