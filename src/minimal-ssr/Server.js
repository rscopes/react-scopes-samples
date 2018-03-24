var express = require("express"),
    path    = require("path"),
    App     = require('./dist/App.server').default,
    fs      = require("fs"),
    server  = express();


var http = require('http').Server(server);
server.get('/', function ( req, res, next ) {
    //console.dir(App)
    
    App.renderSSR(
        {
            url: req.url
        },
        ( err, html ) => {
            !err ? res.send(200, html)
                : res.send(500, err + '')
        }
    )
    
});
server.post(function ( req, res, next ) {
    console.dir("New state pushed")
    
    
});
server.use(express.static('./dist'))

var server_instance = http.listen(parseInt(80), function () {
    console.warn('Running')
});