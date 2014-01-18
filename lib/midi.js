var midi = require('midi');
var config = require('./config');

var midiIn = new midi.input();
var midiOut = new midi.output();

var appName = config.get('app-name');

midiIn.openVirtualPort(appName + 'MidiIn');
midiOut.openVirtualPort(appName + 'MidiOut');

module.exports.in = midiIn;
module.exports.out = midiOut;