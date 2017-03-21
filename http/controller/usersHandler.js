'use strict';
const bcrypt = require('bcrypt');
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
			res.status(201).json({status: true, data: result, message: "SUCCESS"});
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
		let email    = req.body.email;
		let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
		let pool     = req.app.get('usersRepository');
		pool.login(email, password)
		.then(result => {
			if(result == '') {
				return res.json({status: false, data: result, message: "LOGIN FAILED"});
			}
			return result;
		}).then(info => {
			res.status(201).json({status: true, data: info, message: "SUCCESS"});
		}).catch(error => next(error));
	}

	deleteUser (req, res, user) {
		let id = req.params.id;
		let pool = req.app.get('usersRepository');
		pool.deleteUser(id).then(result => {
			res.status(201).json({status: true, data: result, message: "SUCCESS"});
		}).catch(error => {next(error) });
 	}	

}
module.exports = new UsersHandler;