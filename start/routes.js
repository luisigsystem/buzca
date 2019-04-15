'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** Unlogged */
Route.on('/').render('index')

    /** Costumer */
Route.on('/login').render('costumer/login')
Route.on('/signup').render('costumer/signup')

    /** Partner */
Route.on('/partner/login').render('partner/login')
Route.on('/partner/signup').render('partner/signup')

Route.post('/partner/signup', 'signinup/signupController.savePartner')
Route.get('/partner/complete', 'signinup/signupController.completePartner')

/** Logged */