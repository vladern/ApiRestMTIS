'use strict'

const Oferta = require('../models/oferta')

function getOferta(req,res)
{
    let ofertaId = req.params.id
    //busco el oferta por su id
    Oferta.findOne({"id":ofertaId},(err,oferta)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!oferta) return res.status(404).send({message:'No se ha encontrado el Oferta'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({oferta})
    })
}

function getOfertas(req,res)
{
    Oferta.findOne({},(err,oferta)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!oferta) return res.status(404).send({message:'No se ha encontrado el Ofertas'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({oferta})
    })
}
function updateOferta(req,res)
{
            let ofertaId = req.params.id
            let update = req.body
            console.log(ofertaId)
            Oferta.findOneAndUpdate({"id":ofertaId},update,(err,producto)=>
            {
                //si ha habido error a la hora de actualizar el producto
                if(err) return res.status(500).send({message:`Error al borrar el oferta: ${err}`})
                //sino
                console.log('se ha actualizado')
                return res.status(200).send({message:'la oferta ha sido actualizada'})
            })
}
function saveOferta(req,res)
{
    let oferta =new Oferta()
        oferta.id = req.body.id
        oferta.productos = req.body.productos
        oferta.fecha = req.body.fecha
        //guardamos en la base de datos el producto y mongodb nos devuelve dos parametros el error y el producto guardado
        oferta.save((err,ofertaStored)=>
        {
            if(err) res.status(500).send({message:`Error al guardar en la bd: ${err}`})

            res.status(200).send({oferta: ofertaStored})
        })
}

function deleteOferta(req,res)
{
    let ofertaId = req.params.id
    console.log(ofertaId)
    //busco el producto por su id
    Producto.findById(ofertaId,(err,producto)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!producto) return res.status(404).send({message:'No se ha encontrado la oferta'})

        producto.remove(err =>
        {
            //si ha habido error a la hora de borrar el producto
            if(err) return res.status(500).send({message:`Error al borrar el producto: ${err}`})
            //sino
            res.status(200).send({message:'la oferta ha sido eliminada'})
        })
    })
}
module.exports=
{
    getOferta,
    getOfertas,
    updateOferta,
    saveOferta,
    deleteOferta
}