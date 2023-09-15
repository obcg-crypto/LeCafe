const express = require('express')
const router = express.Router()
const commandeCtrl = require('../controllers/commande')

router.get('/', commandeCtrl.getAllCommandeUser)
router.post('/', commandeCtrl.postCommande)
router.put('/:id', commandeCtrl.updateCommandeUser)

module.exports = router