'use strict'
const axios = require('axios')

class MainController {

    async index({view}) {
        try {
            return view.render('costumer/main')
            
        } catch (error) {
            return response.redirect('/login')
        }
    }

    async loadProfile({view, response, auth}) {
        try {
            await auth.check()
            let email = auth.user.email

            let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
                email: email
            })
            if(res.error) return response.send('Hubo un error')
            
            console.error(res.data.user)
            return view.render('costumer/profile', {user: res.data.user})            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/login')
            
        }
    }

    async loadServices({view, response, auth}) {
        try {
            await auth.check()
            let email = auth.user.email

            let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
                email: email
            })
            if(res.error) return response.send('Hubo un error')
            
            console.error(res.data.user)
            return view.render('costumer/services', {user: res.data.user})            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/login')
            
        }
    }
    
    async loadMessages({view, response, auth}) {
        try {
            await auth.check()
            // let email = auth.user.email

            // let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
            //     email: email
            // })
            // if(res.error) return response.send('Hubo un error')
            
            // console.error(res.data.user)
            // return view.render('costumer/messages', {user: res.data.user})            
            return view.render('costumer/messages')            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/login')
            
        }
    }
    
    async loadHistorial({view, response, auth}) {
        try {
            await auth.check()
            // let email = auth.user.email

            // let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
            //     email: email
            // })
            // if(res.error) return response.send('Hubo un error')
            
            // console.error(res.data.user)
            // return view.render('costumer/historial', {user: res.data.user})            
            return view.render('costumer/historial')            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/login')
            
        }
    }
    
    async loadEarnings({view, response, auth}) {
        try {
            await auth.check()
            // let email = auth.user.email

            // let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getProfile', {
            //     email: email
            // })
            // if(res.error) return response.send('Hubo un error')
            
            // console.error(res.data.user)
            // return view.render('costumer/earnings', {user: res.data.user})            
            return view.render('costumer/earnings')            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/login')
            
        }
    }

    async getService({view, request, response, auth}) {
        try {
            await auth.check()
            let username = request.params.partner

            let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/getUser', {
                username: username
            })
            if(res.error) return response.send('Hubo un error')
            
            console.error(res.data.user)
            return view.render('costumer/service', { partner: res.data.user })
            
        } catch (error) {
            console.error({error: error})
            return response.redirect('/login')
            
        }                 
    }
}

module.exports = MainController
