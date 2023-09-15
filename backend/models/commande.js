const mongoose = require('mongoose')

const commandeSchema = mongoose.Schema({
    numeroTable:{type:Number},
    montant: {type:Number},
    statut: {type: String},
    modePaiement:{type:String},
    date : {type: Date, default:Date.now},
    item : {type: Array}
})

module.exports = mongoose.model('Commandes', commandeSchema)
