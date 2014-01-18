function Message() {

}

var messages = [];

for(var i=0; i<=255; i++) {
  var msg = {};
  var channel;

  msg.status = i;
  msg.data1 = {};
  msg.data2 = {};
  
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
    msg.data1.fn = 'note number';
  }

  if(i>=144 && i<=159) {
    msg.fn = 'note on';
    msg.data1.fn = 'note number';
  }

  if(i>=160 && i<=175) {
    msg.fn = 'polyphonic aftertouch';
    msg.data1.fn = 'note number';
  }

  if(i>=176 && i<=191) {
    msg.fn = 'control/mode change';
  }

  if(i>=192 && i<=207) {
    msg.fn = 'program change';
    msg.data1.fn = 'program number';
  }

  if(i>=208 && i<=223) {
    msg.fn = 'channel aftertouch';
    msg.data1.fn = 'pressure';
  }

  if(i>=224 && i<=239) {
    msg.fn = 'pitch wheel control';
    msg.data1.fn = 'pitch wheel lsb';
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

messages[240].data1.fn = '**';
messages[241].data1.fn = '';
messages[242].data1.fn = 'lsb';
messages[243].data1.fn = 'number';
messages[244].data1.fn = '';
messages[245].data1.fn = '';
messages[246].data1.fn = '';
messages[247].data1.fn = '';
messages[248].data1.fn = '';
messages[249].data1.fn = '';
messages[250].data1.fn = '';
messages[251].data1.fn = '';
messages[252].data1.fn = '';
messages[253].data1.fn = '';
messages[254].data1.fn = '';
messages[255].data1.fn = '';

messages[240].data2.fn = '**';
messages[241].data2.fn = '';
messages[242].data2.fn = 'msb';
messages[243].data2.fn = '';
messages[244].data2.fn = '';
messages[245].data2.fn = '';
messages[246].data2.fn = '';
messages[247].data2.fn = '';
messages[248].data2.fn = '';
messages[249].data2.fn = '';
messages[250].data2.fn = '';
messages[251].data2.fn = '';
messages[252].data2.fn = '';
messages[253].data2.fn = '';
messages[254].data2.fn = '';
messages[255].data2.fn = '';

module.exports = function(arr) {
  return messages[arr[0]];
}