//building a server
//no IIFY!  Node will do it automatically

'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  res.status(200).sendFile(__dirname + '/app/index.html');
});

app.get('/index', function(req, res) {
  res.status(200).sendFile(__dirname + '/app/index.html');
});

app.get('/*', function(req, res) {
  res.status(404).sendFile(__dirname + '/app/views/404.html');
});

app.listen(app.get('port'), function(){
  console.log('server is running on port 5000');
});
