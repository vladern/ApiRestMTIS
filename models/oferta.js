'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OfertaSchema = Schema
({
    id : Number,
    productos: ['Producto'],
    fecha : Date
})
module.exports = mongoose.model('Oferta',OfertaSchema)