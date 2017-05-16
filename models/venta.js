'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VentaSchema = Schema
({
    id : Number,
    productos: ['Producto'],
    tiendaDistribuida : String
})
module.exports = mongoose.model('Venta',VentaSchema)