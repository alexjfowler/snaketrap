var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/snake.html');
});

app.get('/canvasFunctions.js', function(req, res) {
  res.require(__dirname + '/canvasFunctions.js');
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
