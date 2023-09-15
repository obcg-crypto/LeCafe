const Item = require('../models/item')

exports.getOneItem = (req, res , next) => {
   Item.findOne({_id: req.params.id})
    .then((item) => {res.status(200).json({item})})
    .catch(error => res.status(400).json({error}))
}

exports.updateItem = (req, res, next) => {
    Item.updateOne({_id : req.params.id}, {...req.body, _id:req.params.id})
    .then(() => {res.status(201).json({message:'Mise a jour !!'})})
    .catch(error => res.status(400).json({error}))
}

exports.deleteItem = (req, res,next) => {
    Item.deleteOne({_id : req.params.id})
    .then(() => res.status(201).json({message: 'supprimer !!'}))
    .catch(error => res.status(400).json({error}))
}

exports.postItem = (req, res, next) => {
    delete req.body._id
    const item= new Item({
        ...req.body
    })
    item.save()
    .then(() => res.status(201).json({message:'Enregistrer !!'}))
    .catch((error) => {
        console.log(error)
        res.status(400).json({error})
    })
}

exports.getCroissantItem = (req, res, next) =>{
    Item.find({typeMenu:'Croissant'})
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}

exports.getBoissonItem = (req, res, next) =>{
    Item.find({typeMenu:'Boisson Chaude'})
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}


exports.getPainItem = (req, res, next) =>{
    Item.find({typeMenu:'Pain'})
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}

exports.getOmelettesItem = (req, res, next) =>{
    Item.find({typeMenu:'Omelettes'})
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}


exports.getAll = (req, res, next) =>{
    Item.find()
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}