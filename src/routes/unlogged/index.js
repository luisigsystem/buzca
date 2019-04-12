'use strict'

module.exports = (app) => {    
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
}