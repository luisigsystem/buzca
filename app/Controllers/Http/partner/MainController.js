'use strict'

const axios = require('axios')

class MainController {

    async index({request, view, response, auth}) {
        return view.render('partner/main')
    }

    async loadProfile({request, response, view}) {
        response.implicitEnd = false
        
        axios.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
            email: email
        })
        .then(function(res) {
            return view.render('partner/profile')
        })
        .catch(function(error) {
            return response.send('No Excelente')
        })
    }
}

module.exports = MainController
