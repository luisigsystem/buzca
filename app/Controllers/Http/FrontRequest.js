'use strict'

const path = require('path')
const Webhooks = use(path.join(__dirname, '../../Services/Webhooks' ))
const webhooks = new Webhooks()

class FrontRequest {

    async saveLastPosition({request, auth}) {
        return new Promise((res, rej) => {
            try {
                return webhooks.saveLastPosition(auth.user.email, request.body.position)
                    .then(result => {
                        res(result)
                    })
                    .catch(err => {
                        rej(error)  
                    })
            } catch (error) {   
                rej(error)  
            }        
        })
    }

}

module.exports = FrontRequest