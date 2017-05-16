'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001

/** ----------------------------Conexión a base de datos-----------------------------------
 * ----------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------- **/
//conectarse a la bd y escuchar peticiones
mongoose.connect('mongodb://localhost:27017/pasteleria',(err,res)=>
{
    if(err) throw err
    console.log('Conexión a la bd establecida')

    app.listen(port,()=>
    {
        console.log(`API Rest corriendo en localhost:${port}`)
    })
})
