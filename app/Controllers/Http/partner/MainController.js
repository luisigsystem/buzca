'use strict'
const axios = require('axios')

class MainController {

    async index({view}) {
        return view.render('partner/main')
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
            return view.render('partner/profile', {user: res.data.user})            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/partner/login')
            
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
            return view.render('partner/services', {user: res.data.user})            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/partner/login')
            
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
            // return view.render('partner/messages', {user: res.data.user})            
            return view.render('partner/messages')            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/partner/login')
            
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
            // return view.render('partner/historial', {user: res.data.user})            
            return view.render('partner/historial')            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/partner/login')
            
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
            // return view.render('partner/earnings', {user: res.data.user})            
            return view.render('partner/earnings')            
            
        } catch (error) {
            // console.error({error: error})
            return response.redirect('/partner/login')
            
        }
    }
}

module.exports = MainController
