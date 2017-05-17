'use strict'

const Factura = require('../models/factura')

function getFactura(req,res)
{
    let facturaId = req.params.id
    //busco el Factura por su id
    Factura.findOne({"id":facturaId},(err,factura)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!factura) return res.status(404).send({message:'No se ha encontrado el Factura'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({factura})
    })
}

function getFacturas(req,res)
{
    Factura.findOne({},(err,factura)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!factura) return res.status(404).send({message:'No se ha encontrado el Factura'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({factura})
    })
}
function updateFactura(req,res)
{
            let facturaId = req.params.id
            let update = req.body
            console.log(facturaId)
            Factura.findOneAndUpdate({"id":facturaId},update,(err,factura)=>
            {
                //si ha habido error a la hora de actualizar el factura
                if(err) return res.status(500).send({message:`Error al borrar el factura: ${err}`})
                //sino
                console.log('se ha actualizado')
                return res.status(200).send({message:'el factura ha sido actualizado'})
            })
}


function saveFactura(req,res)
{
    let factura =new Factura()
        factura.id = req.body.id
        factura.productos = req.body.productos
        factura.precioTotal = req.body.precioTotal
        console.log(factura.productos)
        //guardamos en la base de datos el factura y mongodb nos devuelve dos parametros el error y el factura guardado
        factura.save((err,facturaStored)=>
        {
            if(err) res.status(500).send({message:`Error al guardar en la bd: ${err}`})

            res.status(200).send({factura: facturaStored})
        })
}

function deleteFactura(req,res)
{
    let facturaId = req.params.id
    console.log(facturaId)
    //busco el factura por su id
    Factura.findById(facturaId,(err,factura)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!factura) return res.status(404).send({message:'No se ha encontrado el factura'})

        factura.remove(err =>
        {
            //si ha habido error a la hora de borrar el factura
            if(err) return res.status(500).send({message:`Error al borrar el factura: ${err}`})
            //sino
            res.status(200).send({message:'el factura ha sido eliminado'})
        })
    })
}
module.exports=
{
    getFactura,
    getFacturas,
    updateFactura,
    saveFactura,
    deleteFactura
}