const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')


router.get('/all', userCtrl.getUsers)
router.post('/login', userCtrl.login)
router.post('/singnUp', userCtrl.singnUp)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router