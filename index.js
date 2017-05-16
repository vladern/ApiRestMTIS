'use strict'

const express=require('express')
const bodyParser=require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.listen(port,()=>
{
    console.log(`API Rest corriendo en localhost:${port}`)
})