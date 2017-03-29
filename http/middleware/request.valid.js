'use strict';

const bcrypt = require('bcrypt');

const RequestValid = {

	register: function (req, res, next) {
		req.data = {
			name     : req.body.name,
			email    : req.body.email,
			password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
			address  : req.body.address,
			phone    : req.body.phone
		}
		for (let key in req.data) {
			if (!req.data[key]) {
				return res.json({message:  `${key} is require`});
			}
		}
		return next();
	},

	login: function (req, res, next) {
		let pool     = req.app.get('usersRepository');
		let email    = req.body.email;
		let password = req.body.password;
		if (!email) {
			return res.json({message: "Email is require"});
		}
		pool.login(email).then(result => {
			if(result.length < 1) {
				return res.json({status: false, data: [], message: 'Email is not exist!'})
			}
			req.data = result;
			return next();
		})
	}

}

module.exports = RequestValid;