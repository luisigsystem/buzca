'use strict'

const axios = require('axios')

class RegisterController {

    async setSkill({request, view, response, auth}) {
        return view.render('complete')
    }
}

module.exports = RegisterController
