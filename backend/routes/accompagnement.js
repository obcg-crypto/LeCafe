const express = require('express')
const router = express.Router()
const accompagnementCtrl = require('../controllers/accompagnement') 

router.get('/', accompagnementCtrl.getAccompagnement)
router.post('/', accompagnementCtrl.postAccompagnement)
router.delete('/:id', accompagnementCtrl.deleteAccompagnement)
router.put('/:id', accompagnementCtrl.updateAccompagnement)
router.get('/:id', accompagnementCtrl.getOneAccompagnement)

module.exports = router