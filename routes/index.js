'use strict'

const express = require('express')
const api = express.Router()
const ProductCtr = require('../controllers/producto')
const FacturaCtr = require('../controllers/factura')

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
/**----------------------------------------------------------------
 * ------------------------------Factura---------------------------
 * ----------------------------------------------------------------
 */
//conseguir un factura con un id concreto
api.get('/factura/:id',FacturaCtr.getFactura)
//conseguir todos los facturas de la bd
api.get('/facturas',FacturaCtr.getFacturas)
//gurdar un factura en la bd
api.post('/factura',FacturaCtr.saveFactura)
//borrar un factura de la bd
api.delete('/factura/:id',FacturaCtr.deleteFactura)
//actualizar un factura que ya esta en la bd
api.put('/factura/:id',FacturaCtr.updateFactura)
/**--------------------------------------------------------------- 
 * ---------------------------------------------------------------
 * ---------------------------------------------------------------
*/
api.post('/signin',(req,res)=>
{
    console.log('peticion de autentificar')
    res.status(200).send({message:'OK'})
})
module.exports = api