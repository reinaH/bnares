// #node js server.

var express = require('express');
var router = express.Router()
var path = require('path');
var app = express();

    app.use(express.static('public'))
       app.get('*', function (req, res) {
    	    res.send('./public/index.html');
    	});

    app.listen(3000, function () {
	    console.log('App listening on port 3000')
	})
