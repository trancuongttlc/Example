'use strict';

const express  = require('express');
const Router   = require('router');
const router   = Router();

let UsersHandler = require('./controller/usersHandler');


// Middleware
let RequestValid = require('./middleware/request.valid');
let EmailValid   = require('./middleware/email.valid');


router
	.get('/users', UsersHandler.getUsers)
	.get('/users/:id', UsersHandler.getById)
	.post('/users', RequestValid, EmailValid, UsersHandler.register)
	.delete('/users/:id', UsersHandler.deleteUser)
	.use(function(err, req, res, next) {
	  	res.json({status: false, data: [], messge: 'Error '+ err});
	});

module.exports = router;