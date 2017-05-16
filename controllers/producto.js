'use strict'

const Producto = require('../models/producto')


function getProduct(req,res)
{
    let productId = req.params.id
    //busco el producto por su id
    Producto.findOne({"id":productId},(err,producto)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!producto) return res.status(404).send({message:'No se ha encontrado el producto'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({producto})

    })
}

function getProducts(req,res)
{
    let productId = req.params.id
     //busco
    Producto.find({},(err,producto)=>
    {

        if(err) return res.status(500).send({message:err})
        if(!producto) return res.status(404).send({message:'No se ha encontrado el producto'})

        //nueva propiedad del JS 6 si se llaman igual solo con poner uno ya vale
        res.status(200).send({producto})

    })
}

function updateProduct(req,res)
{
    let productId = req.params.id
            let update = req.body
            console.log(productId)
            Producto.findOneAndUpdate({"id":productId},update,(err,producto)=>
            {
                //si ha habido error a la hora de actualizar el producto
                if(err) return res.status(500).send({message:`Error al borrar el producto: ${err}`})
                //sino
                console.log('se ha actualizado')
                return res.status(200).send({message:'el producto ha sido actualizado'})
            })
}

function saveProduct(req,res)
{
    let producto =new Producto()
        producto.id = req.body.id
        producto.nombre = req.body.nombre
        producto.cantidad = req.body.cantidad
        //guardamos en la base de datos el producto y mongodb nos devuelve dos parametros el error y el producto guardado
        producto.save((err,productStored)=>
        {
            if(err) res.status(500).send({message:`Error al guardar en la bd: ${err}`})

            res.status(200).send({producto: productStored})
        })
}

function deleteProduct(req,res)
{
    let productId = req.params.id
    console.log(productId)
    //busco el producto por su id
    Producto.findById(productId,(err,producto)=>
    {
        if(err) return res.status(500).send({message:err})
        if(!producto) return res.status(404).send({message:'No se ha encontrado el producto'})

        producto.remove(err =>
        {
            //si ha habido error a la hora de borrar el producto
            if(err) return res.status(500).send({message:`Error al borrar el producto: ${err}`})
            //sino
            res.status(200).send({message:'el producto ha sido eliminado'})
        })

    })
}

module.exports = 
{
    getProduct,
    getProducts,
    updateProduct,
    saveProduct,
    deleteProduct
}