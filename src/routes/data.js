const { Router } = require('express')
const router = Router()
const { index, newData, postData, deleteData, upgradeDate, updateData } = require('../controllers/data.controllers')

router.route('/')
.get(index)

router.route('/new')
.get(newData)
.post(postData)

router.route('/delete/:id')
.get(deleteData)

router.route('/update/:id')
.get(upgradeDate)
.post(updateData)

module.exports = router