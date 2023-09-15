const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/item')


router.get('/croissant', itemCtrl.getCroissantItem)
router.get('/boisson', itemCtrl.getBoissonItem)
router.get('/pain', itemCtrl.getPainItem)
router.get('/omelette', itemCtrl.getOmelettesItem)
router.post('/', itemCtrl.postItem)
router.delete('/:id', itemCtrl.deleteItem)
router.put('/:id', itemCtrl.updateItem)
router.get('/:id', itemCtrl.getOneItem)
router.get('/AllItems', itemCtrl.getAll)




module.exports = router