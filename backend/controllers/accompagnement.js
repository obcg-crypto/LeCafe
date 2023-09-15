const Accompagnement = require('../models/accompagnement')

exports.getAccompagnement = (req, res, next) =>{
    Accompagnement.find()
    .then(accompagnement => res.status(200).json({accompagnement}))
    .catch(error => res.status(400).json({error}))
}

exports.postAccompagnement = (req, res, next) => {
    delete req.body._id
    const accompagnement = new Accompagnement({
        ...req.body
    })
    accompagnement.save()
    .then(() => res.status(201).json({message:'Enregistrer !!'}))
    .catch((error) => {
        console.log(error)
        res.status(400).json({error})
    })
}

exports.deleteAccompagnement = (req, res,next) => {
    Accompagnement.deleteOne({_id : req.params.id})
    .then(() => res.status(201).json({message: 'supprimer !!'}))
    .catch(error => res.status(400).json({error}))
}

exports.updateAccompagnement = (req, res, next) => {
    Accompagnement.updateOne({_id : req.params.id}, {...req.body, _id:req.params.id})
    .then(() => {res.status(201).json({message:'Mise a jour !!'})})
    .catch(error => res.status(400).json({error}))
}

exports.getOneAccompagnement = (req, res , next) => {
    Accompagnement.findOne({_id: req.params.id})
    .then((accompagnement) => {res.status(200).json({accompagnement})})
    .catch(error => res.status(400).json({error}))
}