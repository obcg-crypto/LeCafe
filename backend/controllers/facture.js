const Facture = require('../models/facture')

exports.getFacture = (req, res, next) =>{
    Facture.find()
    .then(facture => res.status(200).json({facture}))
    .catch(error => res.status(400).json({error}))
}

exports.postFacture = (req, res, next) => {
    delete req.body._id
    const facture = new Facture({
        ...req.body
    })
    facture.save()
    .then(() => res.status(201).json({message:'Enregistrer !!'}))
    .catch((error) => {
        console.log(error)
        res.status(400).json({error})
    })
}

exports.deleteFacture = (req, res,next) => {
    Facture.deleteOne({_id : req.params.id})
    .then(() => res.status(201).json({message: 'supprimer !!'}))
    .catch(error => res.status(400).json({error}))
}

exports.updateFacture = (req, res, next) => {
    Facture.updateOne({_id : req.params.id}, {...req.body, _id:req.params.id})
    .then(() => {res.status(201).json({message:'Mise a jour !!'})})
    .catch(error => res.status(400).json({error}))
}

exports.getOneFacture = (req, res , next) => {
    Facture.findOne({_id: req.params.id})
    .then((facture) => {res.status(200).json({facture})})
    .catch(error => res.status(400).json({error}))
}