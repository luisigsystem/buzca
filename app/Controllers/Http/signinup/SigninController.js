'use strict'

const Database = use('Database')

class SigninController {
    async loginPartner({request, response, auth}) {
        try {
            const  { email, password } = request.all()
            
            let user = await Database.select('email').from('users').where('email', email).first()
            console.log({user: user})
            if(!user){
                return view.render('/partner/login', {msg: "Usuario no existe"})
            }	

            await auth.attempt(email, password)

            return response.redirect('/partner')
        } catch (error) {
            console.error({error: error})
            return response.redirect('/partner/login')            
        }
    }

    async logout({response, auth}) {
        try {
            await auth.logout()

        } catch (error) {
        }
        return response.redirect('/')         
    }
}

module.exports = SigninController
