'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FacturaSchema = Schema
({
    id : Number,
    productos: ['Producto'],
    precioTotal : Number
})
module.exports = mongoose.model('Factura',FacturaSchema)