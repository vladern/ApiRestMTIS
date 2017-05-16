'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

/** ----------------------------Conexión a base de datos-----------------------------------
 * ----------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------- **/
//conectarse a la bd y escuchar peticiones
mongoose.connect(config.db,(err,res)=>
{
    if(err) throw err
    console.log('Conexión a la bd establecida')

    app.listen(config.puerto,()=>
    {
        console.log(`API Rest corriendo en localhost:${config.puerto}`)
    })
})
