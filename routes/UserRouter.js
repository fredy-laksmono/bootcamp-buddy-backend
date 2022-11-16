const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getUsers)
Router.get('/:user_email', controller.getUserByEmail)
Router.put('/:user_email', controller.updateUserEmail)

module.exports = Router
