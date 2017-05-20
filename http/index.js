'use strict';

const express  = require('express');
const Router   = require('router');
const router   = Router();
const multer   = require('multer');

let UsersHandler  = require('./controller/usersHandler');
	
// Middleware
let RequestValid = require('./middleware/request.valid');
let EmailValid   = require('./middleware/email.valid');
let TokenValid   = require('./middleware/token.valid');
let FileValid    = require('./middleware/file.valid');

let storage	=	multer.diskStorage({
	destination: function (req, file, callback) {
	    callback(null, './public/images');
	},
	filename: function (req, file, callback) {
	    callback(null, Date.now() + file.originalname);
	}
});

let upload = multer({ storage: storage });

router
	.get('/users', UsersHandler.getUsers)
	.get('/users/:id', UsersHandler.getById)

	.post('/users/upload/:id', upload.single('avatar'), FileValid, UsersHandler.uploadAvatar)
	.post('/users/login', RequestValid.login, UsersHandler.login)
	.post('/users', RequestValid.register, EmailValid, UsersHandler.register)
	.post('/users/editProfile/:id', RequestValid.register, UsersHandler.editProfile)
	.delete('/users/:id', UsersHandler.deleteUser)
	.use(function(err, req, res, next) {
	  	res.json({status: false, data: [], messge: 'Error '+ err});
	});
module.exports = router;