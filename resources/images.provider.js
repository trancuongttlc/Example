'use strict';

let ImagesRepository = require('./images.repository');
module.exports = (req, res, next) => {
	let connection = req.app.get('connection');
	let imagesRepository = new ImagesRepository(connection);
	req.app.set('imagesRepository', imagesRepository);
	next();
}