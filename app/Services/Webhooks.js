'use strict'

const axios = require('axios')

class Webhooks {

    saveLastPosition(email, position) {
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/setRealPosition', {
                email,
                position
            }).then(result => {
                resolve(result.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    filterServices(latitude, longitude, skill) {
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getServicesByLocation', {
                latitude, 
                longitude, 
                skill
            }).then(result => {
                resolve(result.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

}

module.exports = Webhooks