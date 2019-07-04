'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** Unlogged */
Route.on('/').render('index')

    /** Costumer */
Route.on('/login').render('costumer/login')
Route.on('/signup').render('costumer/signup')

Route.post('/signup', '/signinup/signupController.saveCustomer')
Route.get('/main', '/signinup/signupController.main')

Route.post('/login', '/signinup/signinController.loginCustomer')

    /** Partner */
Route.on('/partner/login').render('partner/login')
Route.on('/partner/signup').render('partner/signup')

Route.post('/partner/signup', '/signinup/signupController.savePartner')
Route.post('/partner/complete', '/partner/RegisterController.setSkill')

Route.post('/partner/login', '/signinup/signinController.loginPartner')

Route.get('/partner', '/partner/MainController.index')


/** Logged */
Route.get('/logout', 'signinup/SigninController.logout')

    /** Costumer */
Route.get('/profile/:email', 'customer/MainController.loadProfile')

Route.get('/messages', 'customer/MainController.loadMessages')
Route.get('/historial', 'customer/MainController.loadHistorial')

Route.post('/filter/services', 'FrontRequest.filterServices')

    /** Partner */
Route.get('/partner/profile/:email', 'partner/MainController.loadProfile')

Route.post('/save/position', 'FrontRequest.saveLastPosition')

Route.get('/partner/services', 'partner/MainController.loadServices')
Route.get('/partner/messages', 'partner/MainController.loadMessages')
Route.get('/partner/historial', 'partner/MainController.loadHistorial')
Route.get('/partner/earnings', 'partner/MainController.loadEarnings')