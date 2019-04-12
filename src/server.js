'use strict'

const { port } = require('./app/config/config')
const express = require('express')
const app = express()

// Routes
require('./routes/unlogged')(app)

// Server Runing
app.listen(port, () => {
    console.log(`Running http://127.0.0.1:${port}`)
})
