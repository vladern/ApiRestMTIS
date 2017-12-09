'use strict'

const express=require('express')
const bodyParser=require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')
var cors = require('cors')

// uso de cors
app.use(cors())
app.use(bodyParser.json())
app.engine('.hbs',hbs(
    {
        defaultLayout:'default',
        extname:'.hbs'
    }))
app.set('view engine','.hbs')
app.use('/api',api)
app.use('/login',(req,res)=>
{
    res.render('login')
})
app.use('/productos',(req,res)=>
{
    res.render('producto')
})


module.exports=app