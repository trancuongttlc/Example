'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');

class UsersHandler {

	getUsers (req, res, next) {
		let pool = req.app.get('usersRepository');
		pool.getUsers().then(result => {
			res.status(201).json({status: true, data: result, message: "SUCCESS"});
		}).catch(error => {next(error) });
	}

	getById (req, res, next) {
		let id = req.params.id;
		let pool = req.app.get('usersRepository');
		pool.getById(id).then(result => {
			let userInfo = result[0][0];
			userInfo.images = result[1];
			res.status(201).json({status: true, data: userInfo, message: "SUCCESS"});
		}).catch(error => {next(error) });
	}

	register (req, res, next) {
		let data = req.data;
		let pool = req.app.get('usersRepository');
		pool.register(data).then(result => {
			res.status(201).json({status: true, data: result, message: "SUCCESS"});
		}).catch(error => {next(error) });
	}

	login (req, res, next) {
		let data   = req.data;	
		let object = {};
		for (let i = 0; i < data.length; ++i)
		    if (data[i] !== undefined) object = data[i];
		if (!req.body.password) {
	   		return res.json({status: false, data: [], message: 'Password is wrong !'})
		}
		if (bcrypt.compareSync(req.body.password, object.password)) {
			let token = jwt.sign(object, 'cuong', {
				expiresIn: '1 days'
			});
			return res.status(200).json({status: true, data: {data: object, token: token}, message: 'LOGIN SUCCESS'});
		}
		return res.status(200).json({status: false, data: [], message: 'LOGIN FAILED'});
	}

	editProfile (req, res, next) {
		let id       = req.params.id;
		let data     = req.data;
		let pool     = req.app.get('usersRepository');
		pool.editProfile(id, data).then(result => {
			res.status(201).json({status: true, data: result, message: "SUCCESS"});
		}).catch(error => next(error));
	}

	uploadAvatar (req, res, next) {
		let id     = req.params.id;
		let avatar = req.data;
		let pool   = req.app.get('usersRepository');
		pool.uploadAvatar(id, avatar.path).then(result => {
			res.json({status: true, data: result, message: "SUCCESS"});
		}).catch(error => next(error));
	}

	deleteUser (req, res, user) {
		let id   = req.params.id;
		let pool = req.app.get('usersRepository');
		pool.deleteUser(id).then(result => {
			res.status(201).json({status: true, data: result, message: "SUCCESS"});
		}).catch(error => {next(error) });
 	}

}


module.exports = new UsersHandler;