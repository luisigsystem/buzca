'use strict'

const axios = require('axios')

function index(req, res) {
    axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/saveUser', {
        a: 3,
        b: 4
    })
    .then(function(response) {
        console.log(response)
        console.log(response.data)
        return res.send(`Excelente ${response.data}`)
    })
    .catch(function(error) {
        return res.send('No Excelente')
    })
}

module.exports = {
    index
}