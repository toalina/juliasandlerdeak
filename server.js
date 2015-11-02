//building a server
//no IIFY!  Node will do it automatically

'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/index.html', function(req, res) {//translates to the URL localhost/3000/greet
  res.status(200).sendFile(__dirname + '/public/index.html');
});
app.get('/index', function(req, res) {//translates to the URL localhost/3000/greet
  res.status(200).sendFile(__dirname + '/public/index.html');
});

// app.get('/*', function(req, res) {
//   res.status(404).sendFile(__dirname + '/public/404.html');
// });

app.listen(app.get('port'), function(){ //environmental variable process.env pulls the port from the command line, if it doesn't exist it will go to 3000.  in the command line we can now say "PORT=5000 node server" and the server will pick up on the change.  SWEET
  console.log('server is running on port 5000');
});
