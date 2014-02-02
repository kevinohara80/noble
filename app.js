/* module dependencies */

var colors  = require('colors');
var fs      = require('fs');
var express = require('express');
var midi    = require('./lib/midi');
var config  = require('./lib/config');
var port    = config.get('port');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io').listen(server);

/* socket.io config */

io.set('log level', 1); 

/* express server config */

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.use(app.router);

/* express route bootstrap */

fs.readdir(__dirname + '/routes', function(err, files) {
  if(err) throw err;
  files.forEach(function(f) {
    require(__dirname + '/routes/' + f)(app);
  });
});

/* socket.io connections */

io.sockets.on('connection', function (socket) {
  //socket.emit('news', { hello: 'world' });

  socket.on('midi:listen:start', function() {
    console.log('socket joining midi:in');
    socket.join('midi:in');
  });

  socket.on('midi:listen:stop', function() {
    socket.leave('midi:in');
  })

  socket.on('midi:send', function (data) {
    console.log(data);
    midi.out.sendMessage(message);
  });

});

/* midi message handling */

midi.in.on('message', function(delta, message) {
  console.log(message);
  if(config.get('thru') === true) {
    midi.out.sendMessage(message);
  }
  var msg = midi.decode(message);
  console.log('[midi <-]'.blue + ' ' + msg.channel + ' : ' + msg.fn);
  io.sockets.in('midi:in').emit('midi:message', message);
});

/* app init */

console.log(config.get('app-name').rainbow + ' server listening on port ' + port);
server.listen(port);