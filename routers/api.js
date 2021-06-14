const router = require('express').Router()
const user = require('../controllers/user')

router.post('/api/createUser/:name/:age/:city/:mail/:phone', user.createUser)
router.get('/api/getAllUsers', user.getAllUsers)

module.exports = router