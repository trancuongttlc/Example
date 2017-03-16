'use strict';

let knex = require('./knexfile');
let usersProvider = require('./resources/users.provider');
module.exports = (app) => {
	app.set('connection', knex);
	app.use(usersProvider);
	return app;
}