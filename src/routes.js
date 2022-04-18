const express = require('express');
const UserController = require('./controllers/UserControllers')

const routes = express.Router();

routes.post('/users', UserController.store )
routes.get('/users', UserController.index )

module.exports = routes