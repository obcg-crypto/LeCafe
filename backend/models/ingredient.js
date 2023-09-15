const mongoose = require('mongoose')

const ingredientSchema = mongoose.Schema({
    nom: {type: String, required: true, unique: true},
    cout: {type: String, required: true},
    description: {type: String, required: true},
    typeItem: {type: String, required: true}
})

module.exports = mongoose.model('Ingredients', ingredientSchema)