var should = require('should');
var midiDecode = require('../lib/midi-decode');

describe('lib/midi-decode', function() {

  it('should return the proper midi channel', function() {
    midiDecode([128]).channel.should.equal(1);
    midiDecode([140]).channel.should.equal(13);
    midiDecode([239]).channel.should.equal(16);
  });

  it('should not return midi channels for non-channel messages', function() {
    should.not.exist(midiDecode([127]).channel);
    should.not.exist(midiDecode([240]).channel);
  })

});
