var express      = require("express"),
    path         = require("path"),
    App          = require('./dist/App.server'),
    fs           = require("fs"),
    server       = express(),
    currentState = {},
    http         = require('http').Server(server),
    argz         = require('minimist')(process.argv.slice(2)),
    port         = parseInt(argz.p || argz.port || 8000);
var session      = require('express-session')

server.use(express.json());       // to support JSON-encoded bodies
server.use(express.urlencoded()); // to support URL-encoded bodies
server.set('trust proxy', 1) // trust first proxy
server.use(session({
	                   secret           : 'keybokhjard cat',
	                   resave           : true,
	                   saveUninitialized: true,
	                   cookie           : {
		                   domain  : 'localhost',
		                   port    : port,
		                   sameSite: true,
		                   path    : '/',
		                   httpOnly: false,
		                   secure  : false,
		                   maxAge  : Date.now() + 1000 * 60 * 60 * 24 * 365
	                   }
                   }))
server.get('/', function ( req, res, next ) {
	App.renderSSR(
		{
			sessionId: req.sessionID,
			url      : req.url,
			state    : currentState
		},
		( err, html ) => {
			!err ? res.send(200, html)
			     : res.send(500, err + '')
		}
	)
	
});
server.post('/', function ( req, res, next ) {
	console.log("New state pushed", req.body)
	currentState = req.body;
	res.send(200, 'ok')
});
server.use(express.static('./dist'))

var server_instance = http.listen(port, function () {
	console.warn('Running on ', server_instance.address().port)
});