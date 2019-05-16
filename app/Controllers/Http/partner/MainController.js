'use strict'

const axios = require('axios')

class MainController {

    async index({request, view, response, auth}) {
        return view.render('partner/main')
    }

    async loadProfile({view, response, auth, session}) {
        try {
            await auth.check()
            let email = auth.user.email

            let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
                email: email
            })
            if(res.error) return response.send('Hubo un error')
            
            console.error(res.data.user)
            return view.render('partner/profile', {user: res.data.user})            
            
        } catch (error) {
            console.error({error: error})
            return response.redirect('/partner/login')
            
        }
    }

    async loadView({request, view, response, auth}) {

    }
}

module.exports = MainController
