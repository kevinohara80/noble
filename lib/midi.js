var colors = require('colors');
var midi   = require('midi');
var decode = require('./midi-decode');
var config = require('./config');

var midiIn = new midi.input();
var midiOut = new midi.output();

var appName = config.get('app-name');
var inPortName = appName + 'MidiIn';
var outPortName = appName + 'MidiOut';

midiIn.openVirtualPort(appName + 'MidiIn');
midiOut.openVirtualPort(appName + 'MidiOut');

console.log('opening virtual midi ports');
console.log('midi-in:' + inPortName);
console.log('midi-out:' + outPortName);

module.exports.in = midiIn;
module.exports.out = midiOut;
module.exports.decode = decode;