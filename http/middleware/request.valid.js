'use strict';

const bcrypt = require('bcrypt');
	
module.exports = (req, res, next) => 	{


	req.data = {

		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
		address: req.body.address,
		phone: req.body.phone,
			
	}

	if (!req.data.name) {
		return req.json({message: "Name is require"});
	}
	if (!req.data.email) {
		return req.json({message: "Email is require"});
	}
	if (!req.data.password) {
		return req.json({message: "Password is require"});
	}
	if (!req.data.phone) {
		return req.json({message: "Phone is require"});
	}

	return next();

}