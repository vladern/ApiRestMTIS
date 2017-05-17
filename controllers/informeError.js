'use strict'

const InformeError = require('../models/informeError')

function getInforme(req,res)
{
    let informeId = req.params.id
    //busco el Factura por su id
    InformeError.findOne({"id":facturaId},(err,informe)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!informe) return res.status(404).send({message:'No se ha encontrado el Factura'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({informe})
    })
}

function getInformes(req,res)
{
    Factura.find({},(err,informe)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!factura) return res.status(404).send({message:'No se ha encontrado el Factura'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({informe})
    })
}
function updateInforme(req,res)
{
            let informeId = req.params.id
            let update = req.body
            console.log(informeId)
            InformeError.findOneAndUpdate({"id":informeId},update,(err,informe)=>
            {
                //si ha habido error a la hora de actualizar el factura
                if(err) return res.status(500).send({message:`Error al borrar el factura: ${err}`})
                //sino
                console.log('se ha actualizado')
                return res.status(200).send({message:'el factura ha sido actualizado'})
            })
}

function saveInforme(req,res)
{
    let informe =new InformeError()
        informe.id = req.body.id
        informe.nombre = req.body.nombre
        informe.descripcion = req.body.descripcion
        //guardamos en la base de datos el factura y mongodb nos devuelve dos parametros el error y el factura guardado
        informe.save((err,informeStored)=>
        {
            if(err) res.status(500).send({message:`Error al guardar en la bd: ${err}`})

            res.status(200).send({factura: informeStored})
        })
}

function deleteInforme(req,res)
{
    let informeId = req.params.id
    console.log(informeId)
    //busco el informe por su id
    InformeError.findById(informeId,(err,informe)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!factura) return res.status(404).send({message:'No se ha encontrado el factura'})

        informe.remove(err =>
        {
            //si ha habido error a la hora de borrar el informe
            if(err) return res.status(500).send({message:`Error al borrar el informe de Error: ${err}`})
            //sino
            res.status(200).send({message:'el informe ha sido eliminado'})
        })
    })
}
module.exports=
{
    getInforme,
    getInformes,
    updateInforme,
    saveInforme,
    deleteInforme
}