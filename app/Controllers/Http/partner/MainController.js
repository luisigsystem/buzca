'use strict'

const axios = require('axios')

class MainController {

    async index({request, view, response, auth}) {
        return view.render('partner/main')
    }

    async loadProfile({request, response, view, session}) {
        console.log(session.get('email'))
        let email = session.get('email')

        try {
            const res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
                email: email
            })
            
            console.log(res.data.user)
            session.put('user', 'holi')
            return view.render('partner/profile')
                        
        } catch (error) {
            return response.send('No Excelente')            
        }
    }
}

module.exports = MainController
