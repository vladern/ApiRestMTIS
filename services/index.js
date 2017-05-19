'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
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

    return jwt.encode(payload,config.SECRET_TOKEN)
}

function decodeToken(token)
{
    const decoded = new Promise((resolve,reject)=>
    {
        try
        {
            const payload = jwt.decode(token,config.SECRET_TOKEN)

            if(payload.exp <= moment().unix())
            {
                reject(
                {
                    status:403,
                    message:'The token has ben expired  '
                })
            }

            resolve(payload.sub)
        }catch(err)
        {
            reject(
            {
               status:500,
               message:'Invalid token' 
            })
        } 
    })
    return decoded
}
module.exports = 
{
    createToken,
    decodeToken
}