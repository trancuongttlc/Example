'use strict';

const fs = require('fs');

module.exports = (req, res, next) => {
	req.data = req.file;
	console.log(req.data);
	if (!req.data) {
		return res.json({status: false, message: 'File is require'});
	}
	if (req.file.size > 5000000) {
		return res.json({status: false, message: 'File big size'});
	}
	// if (req.file.mimetype !== 'image/jpeg' || req.file.mimetype !== 'image/jpg' || req.file.mimetype !== 'image/png' ) {
	// 	return res.json({status: false, message: 'File only .jpg .jpeg .png'})
	// }
	next();
}