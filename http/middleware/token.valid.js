'use strict';

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	let token = req.body.token || req.query.token || req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, 'cuongtt', function(err, decoded){
			if (err) {
				return next(err);
			}
			return req.user = decoded._doc;
			next();
		})
	}else {
		res.status(401).json({status:false, data:{}, message:'Token not provider'});
	}
}