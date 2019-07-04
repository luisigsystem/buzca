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

    saveStatusService(email, status) {
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/setServiceStatus', {
                email,    
                status
            }).then(result => {
                resolve(result.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    saveDescriptionService(email, price, description) {
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/setDescriptionService', {
                email,    
                price,
                description
            }).then(result => {
                resolve(result.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    setValoration(username, usernamePartner, calification) {
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/setValoration', {
                username,    
                usernamePartner,
                calification
            }).then(result => {
                resolve(result.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    getCalification(username) {
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getAverageValoration', {
                username
            }).then(result => {
                resolve(result.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    getPendingCustomers(email) {
        return new Promise((resolve, reject) => {
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getPendingCustomers', {
                email
            }).then(result => {
                resolve(result.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

}

module.exports = Webhooks