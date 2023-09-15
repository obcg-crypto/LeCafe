const mongoose = require('mongoose')


const factureSchema = mongoose.Schema({
    montant: {type: Number, required: true},
    commande : [{type: mongoose.Schema.Types.ObjectId, ref: 'Commandes' }],
    date :{type: Date, default: Date.now}
})

module.exports = mongoose.model('Factures', factureSchema)