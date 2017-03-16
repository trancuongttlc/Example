'use strict';

let UsersRepository = require('./users.repository');
module.exports = (req, res, next) => {
	let connection = req.app.get('connection');
	let usersRepository = new UsersRepository(connection);
	req.app.set('usersRepository', usersRepository);
	next();
}