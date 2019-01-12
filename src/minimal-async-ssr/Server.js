var express      = require("express"),
    path         = require("path"),
    App          = require('./dist/App.server').default,
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
//
//function hash( s ) {
//	let h = 7, letters = "acdegilmnoprstuw";
//	for ( let i = 0; i < s.length; i++ ) {
//		h = (h * 37 + letters.indexOf(s[i]))
//	}
//	return h
//}
////
//function hashFind( hash ) {
//	// xn-1 = (v-xn)/37
//	// x0 = 7
//	let x0                            = 7,
//	    letters                       = "acdegilmnoprstuw",
//	    stack                         = [hash],
//	    stackStr                      = [''],
//	    reStackStr                    = [],
//	    reStack = [], v, p = 0, found = 0;
//
//	while ( 1 ) {
//		p++;
//		for ( let i = 0; i < letters.length; i++ ) {
//			for ( let y = 0; y < stack.length; y++ ) {
//				v = (stack[y] - i) / 37;
//				if ( v === x0 ) {
//					found++;
//					console.info("Found : ", letters[i] + stackStr[y])
//				}
//				else if ( v % 1 === 0 && v > 7 ) {
//					reStack.push(v);
//					reStackStr.push(letters[i] + (stackStr[y] || ''));
//				}
//
//			}
//		}
//		stack      = reStack;
//		reStack    = [];
//		stackStr   = reStackStr;
//		reStackStr = [];
//		if ( !stack.length || stack.length > 500000 || p > 10000 )
//			return console.info("Stop search with : ", stack.length, "pending, ", p, "chars, ", found, "matches")
//	}
//
//}