// Requirements
var http = require('http');
var express = require('express');
var Log = require('log');
var log = new Log();

var config = require('./lib/config');
var nxt = require('./lib/nxt');

// HTTP Server
var app = express();
app.set('port', config.port);
var server = http.createServer(app);
server.listen(app.get('port'), function(err, result) {
    log.info('Server listening on port ' + app.get('port'));
});


// Routes
app.get('/', function(req, res, next) {

});

app.get('/tag/*', function(req, res, next) {

});

app.get('/channel/*', function(req, res, next) {

});

app.get('/file/*', function(req, res, next) {

});
