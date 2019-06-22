'use strict'

class SigninController {
    async loginPartner({request, response, auth}) {
        try {
            const  { email, password } = request.all()
            
            let user = await Database.select('email').from('users').where('email', user.email).first()
            console.log({user: user})
            // if(user){
            //     return view.render('signup', {msg: "Usuario ya existe"})
            // }	

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

            return response.redirect('/')
        } catch (error) {
            return response.redirect('/')         
        }
    }
}

module.exports = SigninController
