'use strict'

// const morgan = require('morgan') ////
const { port } = require('./app/config/config')
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Settings
app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'))

// Middlewares
// app.use(morgan('dev')) ////
app.use(express.static( path.join( __dirname, "public") ))
app.use(bodyParser.urlencoded({extended: false})) // solo data
app.use(bodyParser.json())

// Routes
require('./routes/unlogged')(app, urlencodedParser)


// Server Runing
app.listen(port, () => {
    console.log(`Running http://127.0.0.1:${port}`)
})
