'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** Unlogged */
Route.on('/').render('index')

    /** Costumer */
Route.on('/login').render('costumer/login')
Route.on('/signup').render('costumer/signup')

Route.post('/main', 'signinup/signupController.saveCostumer')
Route.get('/main', 'signinup/signupController.main')

    /** Partner */
Route.on('/partner/login').render('partner/login')
Route.on('/partner/signup').render('partner/signup')

Route.post('/partner/signup', 'signinup/signupController.savePartner')
Route.post('/partner/complete', 'partner/RegisterController.setSkill')

Route.post('/partner/login', 'signinup/signinController.loginPartner')

Route.get('/partner', 'partner/MainController.index')


/** Logged */

    /** Partner */
Route.get('/partner/:email', 'partner/MainController.loadProfile')
Route.get('/logout', 'signinup/SigninController.logout')

Route.post('/save/position', 'FrontRequest.saveLastPosition')