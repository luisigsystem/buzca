'use strict'

const axios = require('axios')

function savePartner(req, res) {
    axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/saveUser', {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        dist: req.body.dist,
        password: req.body.password
    })
    .then(function(response) {
        console.log(response.data)
        return res.send(`Usuario registrado`)
    })
    .catch(function(error) {
        return res.send('No Excelente')
    })
}

module.exports = {
    savePartner
}