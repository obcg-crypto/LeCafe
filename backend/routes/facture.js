const express = require('express')
const router = express.Router()
const factureCtrl = require('../controllers/facture')

router.get('/', factureCtrl.getFacture)
router.post('/', factureCtrl.postFacture)
router.delete('/:id', factureCtrl.deleteFacture)
router.put('/:id', factureCtrl.updateFacture)
router.get('/:id', factureCtrl.getOneFacture)

module.exports = router