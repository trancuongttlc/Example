'use strict';

class Users {

	constructor(connection) {
		this.connection = connection;
	}

	getUsers () {
		return this.connection.select('*').from('users').limit(10);
	}

	getById (id) {
		return Promise.all([
			this.connection.select('*').from('users').where({id: id}),
			this.connection.select('path').from('images').where({users_id: id})
		])
	}

	countEmail(email) {
		return this.connection.select(this.connection.raw('count(email) as count')).from('users')
			.where({email: email});
	}

	register (data) {
		return this.connection.table('users').insert(data);
	}

	login (email) {
		return this.connection.select('*').from('users')
			.where({ email: email});
	}

	uploadAvatar (id, avatar) {
		return this.connection.table('users').update({avatar: avatar}).where({id: id});
	}

	editProfile (id, data) {
		return this.connection.table('users').update(data).where({id: id});
	}

	deleteUser (id) {
		return this.connection.table('users').where({id: id}).del();
	}

}

module.exports = Users;
