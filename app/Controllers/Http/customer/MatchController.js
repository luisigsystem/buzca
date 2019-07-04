'use strict'

const axios = require('axios')

class MatchController {

    async index({request, response, view, auth}) {
        try {
            await auth.check()
            let usernamePartner = request.params.partner

            let partner = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getUser', {
                username: usernamePartner
            })
            if(partner.error) return response.send('Hubo un error')

            let customer = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getUser', {
                username: auth.user.username
            })
            if(partner.error) return response.send('Hubo un error')

            let dist = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getDistance', {
                latitude_a: customer.data.user.lastPosition[0].$numberDouble,
                longitude_a: customer.data.user.lastPosition[1].$numberDouble,
                latitude_b: partner.data.user.lastPosition[0].$numberDouble,
                longitude_b: partner.data.user.lastPosition[1].$numberDouble,
            })
            if(dist.error) return response.send('Hubo un error '+dist.error)
            
            console.error(dist.data)
            return view.render('costumer/contact', { partner: partner.data.user, dist: dist.data })
            
        } catch (error) {
            console.log(error)
            return response.redirect('/login')
        }
    }

}

module.exports = MatchController