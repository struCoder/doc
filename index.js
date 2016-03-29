'use strict';

const http = require('http');
const serveStatic = require('serve-static');
const express = require('express');

let app = express();
const port = 9012;


app.use(serveStatic('public/doc', {
  'index': ['index.html', 'index.htm']
}));


// Create server
let server = http.createServer(app);

// Listen
server.listen(port, function() {
  console.log('server was running at: ', port);
});

