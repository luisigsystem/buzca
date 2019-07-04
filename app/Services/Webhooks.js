'use strict'

const axios = require('axios')

class Webhooks {

    saveLastPosition(email, position) {
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/setRealPosition', {
                email,
                position
            }).then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    }

    filterServices(latitude, longitude, skill) {
        console.log('webhooks')
        console.log(latitude, longitude, skill)
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getServicesByLocation', {
                latitude, 
                longitude, 
                skill
            }).then(result => {
                console.log(result)
                console.log(':)')
                resolve(result)
            }).catch(err => {
                console.log(err)
                console.log(':c')
                reject(err)
            })
        })
    }

}

module.exports = Webhooks