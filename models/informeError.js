'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InformeSchema = Schema
({
    id : Number,
    nombre: String,
    descripcion: String
})
module.exports = mongoose.model('Venta',VentaSchema)