'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FacturaSchema = Schema({
    id: Number,
    productos: ['Producto'],
    precioTotal: Number,
    cliente: String
})
module.exports = mongoose.model('Factura', FacturaSchema)