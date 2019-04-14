'use strict'

const testController = require('../../app/controllers/testController')
const signupController = require('../../app/controllers/signinup/signupController')

module.exports = (app, urlencodedParser) => {    
    app.get('/', (req, res) => {
        return res.render('index')
    })
    app.get('/login', (req, res) => {
        return res.render('costumer/login')
    })
    app.get('/signup', (req, res) => {
        return res.render('costumer/signup')
    })
    app.get('/partner/login', (req, res) => {
        return res.render('partner/login')
    })
    app.get('/partner/signup', (req, res) => {
        return res.render('partner/signup')
    })
    app.post('/partner/signup', urlencodedParser, (req, res) => {
        return signupController.savePartner(req, res)
    })

    /* Testing */
    app.get('/test', (req, res) => {
        return testController.index(req, res)
    })
}