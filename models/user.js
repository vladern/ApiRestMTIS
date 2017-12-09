'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema
({
    email:{type:String,unique:true,lowercase:true},
    displayName:String,
    password:{type:String},
    singupDate:{type:Date,default:Date.now},
    lastLogin: Date,
})


module.exports = mongoose.model('User',UserSchema)