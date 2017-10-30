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
        if(err) return res.status(500).send({message:'no se ha podido registrar al usuario:'+`${err}`})

        return res.status(200).send({token: service.createToken(user),message: 'OK'})
    })
}

function signIn(req,res)
{
    User.find({email: req.body.email},(err,user)=>
    {
        if(err) return res.status(500).message({message: err})
        if(!user) return res.status(404).message({message: 'no exiete el usuario'})

        req.user=user
        res.status(200).send(
        {
            message:'Te has logeado correctamente',
            token: service.createToken(user)
        })
    })
}

module.exports = 
{
    signIn,
    signUP
}