const { Router } = require('express')
const router = Router()
const { index } = require('../controllers/home.controllers')

router.route('/')
    .get(index)

module.exports = router