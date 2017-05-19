'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema
({
    email:{type:String,unique:true,lowercase:true},
    displayName:String,
    password:{type:String,select:false},
    singupDate:{type:Date,default:Date.now},
    lastLogin: Date,
})

UserSchema.pre('save',(next)=>
{
    let user = this
    //si la contraseña no se ha modificado
    //if(!user.isModified('password')) return next()

    bcrypt.genSalt(10,(err,salt)=>
    {
        if(err) return next(err)
        //consigo el hash de la contraseña
        bcrypt.hash(user.password,salt,null,(err,hash)=>
        {
            if(err) return next(err)
            //guardo la contraseña ya hasheada
            user.password=hash
            next()
        })
    })
})

module.exports = mongoose.model('User',UserSchema)