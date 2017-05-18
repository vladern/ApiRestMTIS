'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services/index')

function signUP(req,res)
{
    const user = new User(
    {
           email:req.body.email,
           displayName:req.body.displayName
    })
    user.save((err)=>
    {
        if(err) return res.status(500).send({message:'no se ha podido registrar al usuario'})

        res.status(200).send({token: service.createToken(user)})
    })
}

function signIn()
{

}

module.exports = 
{
    signIn,
    signUP
}