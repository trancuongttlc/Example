'use strict';

module.exports = (req, res, next) => {

	let email = req.body.email;
	let pool  = req.app.get('usersRepository');
	pool.countEmail(email).then(email => {
		if (email[0].count > 0) {
			return res.json({status: false, message: "Email readly exits"});
		}
		return next();
	}).catch( error => { next(error) });

}