'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services/index')

function signUP(req,res)
{
    const user = new User(
    {
           email:req.body.email,
           displayName:req.body.displayName,
           password: req.body.password
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
        if(err) return res.status(500).send({message: err})
        if(!user[0]) return res.status(404).send({message: 'no exiete el usuario'})
        if(user[0].password !== req.body.password) return res.status(404).send({message: 'credenciales incorectas'})
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