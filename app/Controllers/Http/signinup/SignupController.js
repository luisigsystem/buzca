'use strict'

const axios = require('axios')

class SignupController {

    async savePartner({request, response, session, view}) {
        response.implicitEnd = false

        const {name, lastname, email, dist, password} = request.all()

        try {
            const res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/saveUser', {
                name: name,
                lastname: lastname,
                email: email,
                dist: dist,
                type: 'partner',
                password: password
            })
            if(res.error) return response.send('Hubo un error')

            let username = res.data.username
            console.log(username)
            session.put('username', username)
            return view.render('partner/complete', {username: username})
        } catch (error) {
            console.error(error)
            return response.send('No Excelente')
        }
    }

    async saveCostumer({request, response}) {
        response.implicitEnd = false
        const {name, lastname, email, dist, password} = request.all()

        try {
            const res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/saveUser', {
                name: name,
                lastname: lastname,
                email: email,
                dist: dist,
                type: 'user',
                password: password
            })
            return response.redirect('/main')
        } catch (error) {
            console.error(error)
            return response.send('No Excelente')
        }
    }

    async main({request, response, view, session}) {
        return view.render('costumer/main', {msg: "Usuario Registrado"})
    }
}

module.exports = SignupController
