var http = require('http');
var serveStatic = require('serve-static');
var express = require('express');

var app = express();
var port = 9012;


app.use(serveStatic('public/doc', {
  'index': ['index.html', 'index.htm']
}));


// Create server
var server = http.createServer(app);

// Listen
server.listen(port, function() {
  console.log('server was running at: ', port);
});

