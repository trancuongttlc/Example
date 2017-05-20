'use strict';

let knex = require('./knexfile');
let usersProvider = require('./resources/users.provider');
let imagesProvider = require('./resources/images.provider');


module.exports = (app) => {
	app.set('connection', knex);
	app.use(usersProvider);
	app.use(imagesProvider);
	return app;
}