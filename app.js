var colors  = require('colors');
var fs      = require('fs');
var express = require('express');
var midi    = require('./lib/midi');
var decode  = require('./lib/midi-decode');
var config  = require('./lib/config');

var app = express();

var port = config.get('port');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.use(app.router);

fs.readdir(__dirname + '/routes', function(err, files) {
  if(err) throw err;
  files.forEach(function(f) {
    require(__dirname + '/routes/' + f)(app);
  });
});

midi.in.on('message', function(delta, message) {
  console.log(message);
  if(config.get('thru') === true) {
    midi.out.sendMessage(message);
  }
  var msg = decode(message);
  console.log('[midi <-]'.blue + ' ' + msg.channel + ' : ' + msg.fn);
});

console.log(config.get('app-name').rainbow + ' server listening on port ' + port);
app.listen(port);