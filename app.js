'use strict'

const express=require('express')
const bodyParser=require('body-parser')
const app = express()
const ProductCtr = require('./controllers/producto')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//conseguir un producto con un id concreto
app.get('/api/producto/:id',ProductCtr.getProduct)
//conseguir todos los productos de la bd
app.get('/api/productos',ProductCtr.getProducts)
//gurdar un producto en la bd
app.post('/api/producto',ProductCtr.saveProduct)
//borrar un producto de la bd
app.delete('/api/producto/:id',ProductCtr.deleteProduct)
//actualizar un producto que ya esta en la bd
app.put('/api/producto/:id',ProductCtr.updateProduct)

module.exports=app