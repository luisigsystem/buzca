'use strict'

const Database = use('Database')
const path = require('path')
const User = use(path.join(__dirname, './../../../Models/User' ))
// const User = use('App/Models/User')
const axios = require('axios')

class SignupController {

    async savePartner({request, response, auth, view}) {	
        try {                
            const user = new User()

            const {name, lastname, email, dist, password} = request.all()

            let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/saveUser', {
                name: name,
                lastname: lastname,
                email: email,
                dist: dist,
                type: 'partner'
            })
            if(res.error) return response.send('Hubo un error')
            let username = res.data.username
            
            console.log(username)
            user.name = name
            user.lastname = lastname
            user.username = username
            user.email = email
            user.dist = dist
            user.type = 'partner'
            user.password = password

            let existUser = await Database.select('email').from('users').where('email', user.email).where('type', 'partner').first()
            if(existUser){
                return view.render('partner/signup', {msg: "Usuario ya existe"})
            }	

            await user.save()  
            await auth.login(user)
            return view.render('partner/complete', {username: username})

        } catch (error) {
            console.error(error) 
            return response.send('Hubo un error ' + error)            
        }  
    }

    async saveCustomer({request, response, auth}) {
        try {
            const user = new User()

            const {name, lastname, email, dist, password} = request.all()

            let res = await axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/saveUser', {
                name: name,
                lastname: lastname,
                email: email,
                dist: dist,
                type: 'customer'
            })
            if(res.error) return response.send('Hubo un error')
            let username = res.data.username
            
            console.log(username)
            user.name = name
            user.lastname = lastname
            user.username = username
            user.email = email
            user.dist = dist
            user.type = 'customer'
            user.password = password

            let existUser = await Database.select('email').from('users').where('email', user.email).where('type', 'customer').first()
            if(existUser){
                return view.render('signup', {msg: "Usuario ya existe"})
            }	

            await user.save()  
            await auth.login(user)
            return response.redirect('/main')
            
        } catch (error) {
            console.log('nooo',error)
            return response.send('No Excelente')
            
        }
    }

    async main({request, response, view, session}) {
        return view.render('costumer/main', {msg: "Usuario Registrado"})
    }
}

module.exports = SignupController
