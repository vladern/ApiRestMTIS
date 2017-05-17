'use strict'

const Venta = require('../models/venta')

function getVenta(req,res)
{
    let ventaId = req.params.id
    //busco el Factura por su id
    Factura.findOne({"id":ventaId},(err,venta)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!factura) return res.status(404).send({message:'No se ha encontrado el venta'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({venta})
    })
}

function getVentas(req,res)
{
    Factura.findOne({},(err,ventas)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!ventas) return res.status(404).send({message:'No se ha encontrado el ventas'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({ventas})
    })
}
function updateVenta(req,res)
{
            let ventaId = req.params.id
            let update = req.body
            console.log(ventaId)
            Producto.findOneAndUpdate({"id":ventaId},update,(err,producto)=>
            {
                //si ha habido error a la hora de actualizar el producto
                if(err) return res.status(500).send({message:`Error al borrar el producto: ${err}`})
                //sino
                console.log('se ha actualizado')
                return res.status(200).send({message:'la venta ha sido actualizada'})
            })
}


function saveVenta(req,res)
{
    let venta =new Venta()
        venta.id = req.body.id
        venta.productos = req.body.productos
        venta.tiendaDistribuida = req.body.tiendaDistribuida
        //guardamos en la base de datos de la venta y mongodb nos devuelve dos parametros el error y la venta guardada
        venta.save((err,ventaStored)=>
        {
            if(err) res.status(500).send({message:`Error al guardar en la bd: ${err}`})

            res.status(200).send({venta: ventaStored})
        })
}

function deleteVenta(req,res)
{
    let ventaId = req.params.id
    console.log(ventaId)
    //busco el producto por su id
    Venta.findById(ventaId,(err,venta)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!venta) return res.status(404).send({message:'No se ha encontrado el producto'})

        venta.remove(err =>
        {
            //si ha habido error a la hora de borrar el producto
            if(err) return res.status(500).send({message:`Error al borrar el producto: ${err}`})
            //sino
            res.status(200).send({message:'el producto ha sido eliminado'})
        })
    })
}
module.exports=
{
    getVenta,
    getVentas,
    updateVenta,
    saveVenta,
    deleteVenta
}