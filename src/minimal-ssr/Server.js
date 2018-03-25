var express      = require("express"),
    path         = require("path"),
    App          = require('./dist/App.server').default,
    fs           = require("fs"),
    server       = express(),
    currentState = {};


var http       = require('http').Server(server);
var bodyParser = require('body-parser')
//server.use(bodyParser.json());       // to support JSON-encoded bodies
//server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//                                     //extended: true
//                                 }));
server.use(express.json());       // to support JSON-encoded bodies
server.use(express.urlencoded()); // to support URL-encoded bodies
server.get('/', function ( req, res, next ) {
    //console.log(currentState)
    
    App.renderSSR(
        {
            url  : req.url,
            state: currentState
        },
        ( err, html ) => {
            !err ? res.send(200, html)
                : res.send(500, err + '')
        }
    )
    
});
server.post('/', function ( req, res, next ) {
    console.log("New state pushed")
    currentState = req.body;
    res.send(200, 'ok')
});
server.use(express.static('./dist'))

var server_instance = http.listen(parseInt(80), function () {
    console.warn('Running')
});