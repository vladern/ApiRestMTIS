'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = Schema
({
    id : Number,
    nombre : String,
    cantidad : Number,
    precio : Number 
})

module.exports = mongoose.model('Producto',ProductSchema)