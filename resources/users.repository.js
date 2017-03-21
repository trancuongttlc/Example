'use strict';

class Users {

	constructor(connection) {
		this.connection = connection;
	}

	getUsers () {
		return this.connection.select('*').from('users').limit(10);
	}

	getById (id) {
		return this.connection.select('*').from('users').where({id: id});
	}

	countEmail(email) {
		return this.connection.select(this.connection.raw('count(email) as count')).from('users')
			.where({email: email});
	}

	register (data) {
		return this.connection.table('users').insert(data);
	}

	login (email, password) {
		return this.connection.select('*').from('users')
		.where({email: email, password: password});
	}

	deleteUser (id) {
		return this.connection.table('users').where({id: id}).del();
	}

}

module.exports = Users;
