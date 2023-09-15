const Ingredient = require('../models/ingredient')


exports.getPainIngredient = (req, res, next) =>{
    Ingredient.find({typeItem:'Pain'})
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}

exports.getBoissonIngredient = (req, res, next) =>{
    Ingredient.find({typeItem:'Boisson Chaude'})
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}

exports.getCroissantIngredient = (req, res, next) =>{
    Ingredient.find({typeItem:'Croissant'})
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}

exports.getOmeletteIngredient = (req, res, next) =>{
    Ingredient.find({typeItem:'Omelettes'})
    .then(item => res.status(200).json({item}))
    .catch(error => res.status(400).json({error}))
}

exports.postIngredient = (req, res, next) => {
    delete req.body._id
    const ingredient = new Ingredient({
        ...req.body
    })
    ingredient.save()
    .then(() => res.status(201).json({message:'Enregistrer !!'}))
    .catch((error) => {
        console.log(error)
        res.status(400).json({error})
    })
}

exports.deleteIngredient = (req, res,next) => {
    Ingredient.deleteOne({_id : req.params.id})
    .then(() => res.status(201).json({message: 'supprimer !!'}))
    .catch(error => res.status(400).json({error}))
}

exports.updateIngredient = (req, res, next) => {
    Ingredient.updateOne({_id : req.params.id}, {...req.body, _id:req.params.id})
    .then(() => {res.status(201).json({message:'Mise a jour !!'})})
    .catch(error => res.status(400).json({error}))
}

exports.getOneIngredient = (req, res , next) => {
    Ingredient.findOne({_id: req.params.id})
    .then((ingredient) => {res.status(200).json({ingredient})})
    .catch(error => res.status(400).json({error}))
}