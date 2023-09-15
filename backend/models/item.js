const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    nom: {type: String, required: true, unique: true},
    cout: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type:String, required:true},
    typeMenu : {type:String, required:true},
    ingredient : [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' }],
    
})

module.exports = mongoose.model('Items', itemSchema)