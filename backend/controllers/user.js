const bcrypt = require('bcrypt')
const User = require('../models/user')

exports.singnUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(
            (hash) => {
                user = new User({
                    login: req.body.login,
                    password: hash,
                    statut: req.body.statut
                })
                user.save()
                    .then(() => res.status(201).json({ message: 'Utilisateur créé !!' }))
                    .catch(error => res.status(400).json({ error }))
            }
        )
        .catch(error => res.status(500).json({ error }))
}


exports.login = (req, res, next) => {
        User.findOne({ login: req.body.login }).then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                }).catch(error => res.status(500).json({ error }));
        }).catch(error => res.status(500).json({ error }));
}

exports.getUsers = (req, res, next) => {
    User.find()
        .then(facture => res.status(200).json({ facture }))
        .catch(error => res.status(400).json({ error }))
}


exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(201).json({ message: 'supprimer !!' }))
        .catch(error => res.status(400).json({ error }))
}

exports.updateUser = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => { res.status(201).json({ message: 'Mise a jour !!' }) })
        .catch(error => res.status(400).json({ error }))
}

exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then((user) => { res.status(200).json({ user }) })
        .catch(error => res.status(400).json({ error }))
}

