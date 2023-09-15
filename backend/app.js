const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Accompagnement = require('./models/accompagnement')
const User = require('./models/user')
const accompagnementRouter = require('./routes/accompagnement')
const itemRouter = require('./routes/item')
const Item =  require('./models/item')
const Ingredient = require('./models/ingredient')
const ingredientRouter = require('./routes/ingredient')
const auth = require('./middleware/auth')
const Commande = require('./models/commande')
const commandeRouter = require('./routes/commande')
const factureRouter = require('./routes/facture')
const Facture = require('./models/facture')
const userRouter = require('./routes/user')
const multer = require('multer');
app.use(express.json())


const storage = multer.diskStorage({
  destination: '../../LeCafe/LeCafe/src/assets',
  filename: function(req,file,cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage});


// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// connexion à la base de données
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log('Connected to MongoDB!')})




    app.get('/upload', function (req, res) {
      res.end('File catcher');
    });
    // POST File
    app.post('/upload', upload.single('file'), function (req, res) {
      if (!req.file) {
        console.log("No file is available!");
        return res.send({
          success: false
        });
      } else {
        console.log('File is available!');
        return res.send({
          success: true
        })
      }
    });
  
  
  

// Creation des différents élément dans la bd   
// User.create({email:'ounior@gmail.com', password:'jst', statut:'gerant'})
// Accompagnement.create({nom:'omettekj', prix:250, description:'bonne description', urlImage:'jdhfxh'})
// Item.create({nom:'purée', prix:600, description:'jsdh ssdkq dks', typeMenu:'petit déjeuner', urlImage:'jdudsh-skds'})
// Item.create({nom:'pain avocat', prix:600, description:'jsdh ssdkq dks', typeMenu:'petit déjeuner', urlImage:'jdudsh-skds'})
// Item.create({nom:'okok', prix:500, description:'jsdh ssdkq dks', typeMenu:'déjeuner', urlImage:'jdudsh-skds'})
// Item.create({nom:'koki', prix:500, description:'jsdh ssdkq dks', typeMenu:'déjeuner', urlImage:'jdudsh-skds'})
// Item.create({nom:'riz sauce tomate', prix:500, description:'jsdh ssdkq dks', typeMenu:'diner', urlImage:'jdudsh-skds'})
// Item.create({nom:'riz sauce arachide', prix:500, description:'jsdh ssdkq dks', typeMenu:'diner', urlImage:'jdudsh-skds'})
// Ingredient.create({nom:'lait', prix:50, description:'bonne description', urlImage:'jdhfxh'})
// Ingredient.create({nom:'sosison', prix:50, description:'bonne description', urlImage:'jdhfxh'})
// Ingredient.create({nom:'plantin', prix:50, description:'bonne description', urlImage:'jdhfxh'})
// Commande.create({numeroTable:1, montant:4500, statut:'terminer', modePaiement:'carte de credit', item:'645f59b1dac13260ddbe400e'})
// Commande.create({numeroTable:2, montant:8500, statut:'en-cour', modePaiement:'cash', item:'645f59b1dac13260ddbe4013'})
// Facture.create({montant:15000, commande:'645f871e3439826a59b2c5ce'})
// Liaison aux routes de l'apllication
app.use('/accompagnement', auth, accompagnementRouter)
app.use('/item', itemRouter)
app.use('/ingredient', ingredientRouter)
app.use('/commande', commandeRouter)
app.use('/facture', factureRouter)
app.use('/user', userRouter)

module.exports = app