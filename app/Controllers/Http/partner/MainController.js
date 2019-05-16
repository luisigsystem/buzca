'use strict'

const axios = require('axios')

class MainController {

    async index({request, view, response, auth}) {
        return view.render('partner/main')
    }

    async loadProfile({request, response, view, session}) {

        let email = 'f@f.com'

        axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
            email: email
        })
        .then(function(res) {
            console.log(res.data.user)
            session.put('user', 'holi')
            return view.render('partner/profile')
        })
        .catch(function(error) {
            return response.send('No Excelente')
        })
    }

    async loadView({request, view, response, auth}) {

    }
}

module.exports = MainController
