const mongoose = require('mongoose')

const serveurSchema = mongoose.Schema({
    login:{type:String, required:true},
    password:{type:String, required:true},
    statut: {type: String, require:true} 
})

module.exports = mongoose.model('Users', serveurSchema)