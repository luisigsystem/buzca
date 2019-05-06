'use strict'

class MainController {

    async index({request, view, response, auth}) {
        return view.render('partner/main')
    }
}

module.exports = MainController
