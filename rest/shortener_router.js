const express = require('express')
const router = express.Router()
const shortenerController = require('./shortener_controller')

router.get('/', shortenerController.index)
router.get('/getAll', shortenerController.getAll)
router.get('/getOne', shortenerController.getOne)
router.post('/create', shortenerController.create)
router.delete('/delete', shortenerController.delete)

module.exports = router