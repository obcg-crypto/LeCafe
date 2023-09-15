const Commandes = require('../models/commande')
const Items =  require('../models/item')


exports.postCommande = (req, res, next) => {
    delete req.body._id
    const item = new Commandes({
        // numeroTable: req.body.numeroTable,
        // montant: req.body.montant,
        // statut: req.body.statut,
        // modePaiement: req.body.modePaiement,
        // item: req.body.item
        ...req.body
    })
    item.save()
    .then(() => res.status(201).json({message:'Enregistrer !!'}))
    .catch((error) => {
        console.log(error)
        res.status(400).json({error})
    })
}

exports.getAllCommandeUser = (req, res, next) =>{
   Commandes.find()
   .populate("item")
   .then(commande => res.status(200).json({commande}))
   .catch(error => res.status(400).json({error})) 
}

exports.updateCommandeUser = (req, res, next) => {
    Commandes.updateOne({_id : req.params.id}, {...req.body, _id:req.params.id})
    .then(() => {res.status(201).json({message:'Mise a jour !!'})})
    .catch(error => res.status(400).json({error}))
}

