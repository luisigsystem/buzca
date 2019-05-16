'use strict'

const axios = require('axios')

class RegisterController {

    async setSkill({request, view, response, auth}) {
        try {
            await auth.check()

            const {skill, latitude, longitude} = request.all()
            
            let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/completeUser', {
                email: auth.user.email,
                skill: skill,
                latitude: latitude,
                longitude: longitude
            })
            if(res.error) return response.send('Hubo un error')
            
            return response.redirect('/partner')
            
        } catch (error) {
            console.log('nooo ',error)
            return response.send('No Excelente :c')
            
        }

    }
}

module.exports = RegisterController
