'use strict'

const express = require('express')
const api = express.Router()
const ProductCtr = require('../controllers/producto')

//conseguir un producto con un id concreto
api.get('/producto/:id',ProductCtr.getProduct)
//conseguir todos los productos de la bd
api.get('/productos',ProductCtr.getProducts)
//gurdar un producto en la bd
api.post('/producto',ProductCtr.saveProduct)
//borrar un producto de la bd
api.delete('/producto/:id',ProductCtr.deleteProduct)
//actualizar un producto que ya esta en la bd
api.put('/producto/:id',ProductCtr.updateProduct)

module.exports = api