'use strict'

const path = require('path')
const Webhooks = use(path.join(__dirname, '../../Services/Webhooks' ))
const webhooks = new Webhooks()

class FrontRequest {

    async saveLastPosition({request, auth}) {
        return new Promise((resolve, reject) => {
            return webhooks.saveLastPosition(auth.user.email, request.body.position)
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)  
                })  
        })
    }

    async filterServices({request}) {
        console.log(request.body.latitude, request.body.longitude, request.body.skill)
        return new Promise((resolve, reject) => {
            return webhooks.filterServices(request.body.latitude, request.body.longitude, request.body.skill)
                .then(result => {
                    console.log(':v')
                    resolve(result)
                })
                .catch(error => {
                    console.log(':"v')
                    reject(error)  
                })
        })
    }

}

module.exports = FrontRequest