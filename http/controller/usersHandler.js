'use strict';

class UsersHandler {

	getUsers (req, res, next) {
		let pool = req.app.get('usersRepository');
		pool.getUsers().then(result => {
			res.status(201).json({status: true, data: result, message: "SUCCESS"});
		}).catch(error => {next(error) });
	}

	getById (req, res, next) {
		let id = req.prams.id;
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

	deleteUser (req, res, user) {
		let id = req.prams.id;
		let pool = req.app.get('usersRepository');
		pool.deleteUser(id).then(result => {
			res.status(201).json({status: true, data: result, message: "SUCCESS"});
		}).catch(error => {next(error) });
 	}	

}
module.exports = new UsersHandler;