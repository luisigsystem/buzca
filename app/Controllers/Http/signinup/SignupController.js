'use strict'

const axios = require('axios')

class SignupController {

    async savePartner({request, response}) {
        response.implicitEnd = false
        const {name, lastname, email, dist, password} = request.all()

        axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/saveUser', {
            name: name,
            lastname: lastname,
            email: email,
            dist: dist,
            password: password
        })
        .then(function(res) {
            console.log('siiii')
            return response.redirect('/partner/complete')
            return response.send(`Usuario registrado`)
        })
        .catch(function(error) {
            console.log('nooo',error)
            return response.send('No Excelente')
        })
    }

    async completePartner({request, response, view, session}) {
        return view.render('partner/complete', {msg: "Usuario Registrado"})
    }
}

module.exports = SignupController
