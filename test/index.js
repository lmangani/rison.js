var should = require('chai').should(),
    rison = require('../index'),
    encode = rison.encode,
    decode = rison.decode;

describe('#escape', function() {
  it('RISON Encoder', function() {
    var testme = { "ami" : "correct" };
    encode(testme).should.equal('(ami:correct)');
  });

});

describe('#unescape', function() {
  it('RISON Decoder', function() {
    var testme = decode('(ami:correct)');
    testme.ami.should.equal('correct');
  });

});
