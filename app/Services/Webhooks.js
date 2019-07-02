'use strict'

const axios = require('axios')

class Webhooks {

    saveLastPosition(email, position) {
        return new Promise((res, rej) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/setRealPosition', {
                email,
                position
            }).then(result => {
                res(result)
            }).catch(err => {
                rej(err)
            })
        })
    }

}

module.exports = Webhooks