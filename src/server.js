'use strict'

const { port } = require('./app/config/config')
const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan') ////

// Settings
app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'))

// Middlewares
app.use(morgan('dev')) ////
app.use(express.static( path.join( __dirname, "public") ))

// Routes
require('./routes/unlogged')(app)


// Server Runing
app.listen(port, () => {
    console.log(`Running http://127.0.0.1:${port}`)
})
