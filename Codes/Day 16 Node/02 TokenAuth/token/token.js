//import jwt-simple
let jwt = require('jwt-simple')
module.exports = (obj, enc_key) => {         //it takes object and encryption key wherever u use token class
    return jwt.encode(obj, enc_key)
}
