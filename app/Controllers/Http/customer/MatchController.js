'use strict'

const axios = require('axios')

class MatchController {

    async index({request, response, view, auth}) {
        try {
            await auth.check()
            let username = request.params.partner

            let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getUser', {
                username: username
            })
            if(res.error) return response.send('Hubo un error')
            
            console.error(res.data.user)
            return view.render('costumer/contact', { partner: res.data.user })

        } catch (error) {
            return response.redirect('/login')
        }
    }

}

module.exports = MatchController