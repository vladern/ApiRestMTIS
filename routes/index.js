'use strict'

const express = require('express')
const api = express.Router()
const ProductCtr = require('../controllers/producto')
const FacturaCtr = require('../controllers/factura')
const OfertaCtr = require('../controllers/oferta')
const VentaCtr = require('../controllers/venta')
const InfomeCtr = require('../controllers/informeError')
const auth = require('../middlewares/auth')
const AuthCtr = require('../controllers/auth')

//conseguir un producto con un id concreto
api.get('/producto/:id',auth, ProductCtr.getProduct)
//conseguir todos los productos de la bd
api.get('/productos',auth, ProductCtr.getProducts)
//gurdar un producto en la bd
api.post('/producto',auth ,ProductCtr.saveProduct)
//borrar un producto de la bd
api.delete('/producto/:id',auth ,ProductCtr.deleteProduct)
//actualizar un producto que ya esta en la bd
api.put('/producto/:id',auth ,ProductCtr.updateProduct)
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
/**----------------------------------------------------------------
 * ------------------------------Oferta----------------------------
 * ----------------------------------------------------------------
 */
//conseguir una oferta con un id concreto
api.get('/oferta/:id',OfertaCtr.getOferta)
//conseguir todos las ofertas de la bd
api.get('/ofertas',OfertaCtr.getOfertas)
//gurdar una oferta en la bd
api.post('/oferta',OfertaCtr.saveOferta)
//borrar una oferta de la bd
api.delete('/oferta/:id',OfertaCtr.deleteOferta)
//actualizar una oferta que ya esta en la bd
api.put('/oferta/:id',OfertaCtr.updateOferta)
/**----------------------------------------------------------------
 * ------------------------------Venta-----------------------------
 * ----------------------------------------------------------------
 */
//conseguir un factura con un id concreto
api.get('/venta/:id',VentaCtr.getVenta)
//conseguir todos los facturas de la bd
api.get('/venta',VentaCtr.getVentas)
//gurdar una factura en la bd
api.post('/venta',VentaCtr.saveVenta)
//borrar una factura de la bd
api.delete('/venta/:id',VentaCtr.deleteVenta)
//actualizar una venta que ya esta en la bd
api.put('/venta/:id',VentaCtr.updateVenta)
/**----------------------------------------------------------------
 * ------------------------------InformeError----------------------
 * ----------------------------------------------------------------
 */
//conseguir un informe con un id concreto
api.get('/informe/:id',InfomeCtr.getInforme)
//conseguir todos los informes de la bd
api.get('/informes',InfomeCtr.getInformes)
//gurdar un informe en la bd
api.post('/informe',InfomeCtr.saveInforme)
//borrar un informe de la bd
api.delete('/informe/:id',InfomeCtr.deleteInforme)
//actualizar un informe que ya esta en la bd
api.put('/informe/:id',InfomeCtr.updateInforme)
/**----------------------------------------------------------------
 * ------------------------------AuthUser--------------------------
 * ----------------------------------------------------------------
 */
api.post('/signup',AuthCtr.signUP)
api.post('/signin',AuthCtr.signIn)
/**--------------------------------------------------------------- 
 * ---------------------------------------------------------------
 * ---------------------------------------------------------------
*/
api.get('/private',auth,(req,res)=>
{
    console.log('ha entrado un usuario authentificado')
    res.status(200).send({message:'OK'})
})
api.post('/login',(req,res)=>
{
    console.log('peticion de autentificar')
    res.status(200).send({message:'OK'})
})
module.exports = api