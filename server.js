'use strict';

const express     = require('express');
const path        = require('path');
const app         = express();
const bodyParser  = require('body-parser');

let boot   = require('./boot');
let router = require('./http/index');

boot(app);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// app.use(express.limit('4M'));

app.use(function (req, res, next) {
    req.data = {};
    next();
});

app.use(express.static('client'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'client/index.html'));
});


app.use('/api', router);

app.listen(3004, function(err, connect) {
    if(err) throw err;
    console.log('App listening to http://localhost:3004 ...');
});

// https://github.com/rajaraodv/react-redux-blog
// https://www.davidmeents.com/blog/manage-state-connect-to-api-redux-axios/