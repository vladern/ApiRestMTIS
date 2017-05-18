'use strict'

const jwt = require('jwt-simple')
const mment = require('moment')
const config = require('../config')
function createToken (user)
{
    const payload = 
    {
        sub: user._id,
        //moment te da el momento en el que fue creado el token
        iat: moment().unix(),
        //cuando expira el token
        exp: moment().add(14,'days').unix()
    }

    jwt.encode(payload,config.SECRET_TOKEN)
}

module.exports = 
{
    createToken
}