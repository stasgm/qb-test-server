'use strict';

var http = require('http');
var db = require('./db.json');

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.write(JSON.stringify(db));
  res.end();
});

var port = 8090;
server.listen(port, function () {
  console.log('test server started on port ' + port);
});