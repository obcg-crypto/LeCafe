const express = require('express')
const router = express.Router()
const ingredientCtrl = require('../controllers/ingredient')

router.get('/pain', ingredientCtrl.getPainIngredient)
router.get('/boisson', ingredientCtrl.getBoissonIngredient)
router.get('/croissant', ingredientCtrl.getCroissantIngredient)
router.get('/omelette', ingredientCtrl.getOmeletteIngredient)
router.post('/', ingredientCtrl.postIngredient)
router.delete('/:id', ingredientCtrl.deleteIngredient)
router.put('/:id', ingredientCtrl.updateIngredient)
router.get('/:id', ingredientCtrl.getOneIngredient)

module.exports = router