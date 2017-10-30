'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VentaSchema = new  Schema
({
    id : Number,
    productos: ['Producto'],
    tiendaDistribuida : String
})
module.exports = mongoose.model('Venta',VentaSchema)