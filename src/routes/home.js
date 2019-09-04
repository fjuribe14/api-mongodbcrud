const { Router } = require('express')
const router = Router()
const { index, about } = require('../controllers/home.controllers')

router.route('/').get(index)

router.route('/about').get(about)


module.exports = router