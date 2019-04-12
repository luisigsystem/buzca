'use strict'

module.exports = (app) => {    
    app.get('/', (req, res) => {
        return res.render('index')
    })
    app.get('/partner/login', (req, res) => {
        return res.render('partner/login')
    })
    app.get('/partner/signup', (req, res) => {
        return res.render('partner/signup')
    })
}