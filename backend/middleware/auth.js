const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const tokenDecoder = jwt.verify(token, 'LE_TOKEN_SECRET')
        const userId = tokenDecoder.userId
        req.auth = {
            userId: userId
        }
        next()
    } catch(error){
        res.status(401).json({error})
    }
}
