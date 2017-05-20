'use strict';

class Images {

	constructor (connection) {
		this.connection = connection;
	}
	
	insertImages(data, id) {
		return this.connection.table('images').insert(data).where({id: id});
	}

}

module.exports = Images;