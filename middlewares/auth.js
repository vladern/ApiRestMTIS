'use strict'

const services = require('../services/index')

function isAuth(req,res,next)
{
    //si no existe campo autorization en el header
    if(!req.headers.autorization)
    {
        return res.status(403).send({message:'no tienes autorización'})
    }
    //como autorization tiene dos elementos hay que hacer split
    const token = req.headers.autorization.split(" ")[1]
    services.decodeToken(token)
        .then(response=>
        {
            req.user= response
            next()
        })
        .catch(response=>
        {
            res.status(response.status).send(response.message)
        })
}
module.exports = isAuth
