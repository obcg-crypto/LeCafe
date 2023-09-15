const mongoose = require('mongoose')

const accompagnementSchema = mongoose.Schema({
    nom: {type: String, required: true},
    prix: {type: Number, required: true},
    description: {type: String, required: true},
    urlImage: {type:String, required:true}
})

module.exports = mongoose.model('Accompagnements', accompagnementSchema)