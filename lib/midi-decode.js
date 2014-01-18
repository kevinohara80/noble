function Message() {

}

var messages = [];

for(var i=0; i<=255; i++) {
  var msg = {};
  var channel;

  msg.status = i;
  
  if(i>=128 && i<=239) {
    if(i === 128) channel = 1;
    msg.channel = channel
    if(channel === 16) {
      channel = 1;
    } else {
      channel++
    }
  }

  if(i>=128 && i<=143) {
    msg.fn = 'note off';
  }

  if(i>=144 && i<=159) {
    msg.fn = 'note on';
  }

  if(i>=160 && i<=175) {
    msg.fn = 'polyphonic aftertouch';
  }

  if(i>=176 && i<=191) {
    msg.fn = 'control/mode change';
  }

  if(i>=192 && i<=207) {
    msg.fn = 'program change';
  }

  if(i>=208 && i<=223) {
    msg.fn = 'channel aftertouch';
  }

  if(i>=224 && i<=239) {
    msg.fn = 'pitch wheel control';
  }

  messages.push(msg);
}

messages[240].fn = 'system exclusive';
messages[241].fn = 'midi time code qtr frame';
messages[242].fn = 'song position pointer';
messages[243].fn = 'song select (song #)';
messages[244].fn = 'undefined (reserved)';
messages[245].fn = 'undefined (reserved)';
messages[246].fn = 'tune request';
messages[247].fn = 'end of sysex (eox)';
messages[248].fn = 'timing clock';
messages[249].fn = 'undefined (reserved)';
messages[250].fn = 'start';
messages[251].fn = 'continue';
messages[252].fn = 'stop';
messages[253].fn = 'undefined (reserved)';
messages[254].fn = 'active sensing';
messages[255].fn = 'system reset';

module.exports = function(arr) {
  return messages[arr[0]];
}