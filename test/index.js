var should = require('chai').should(),
    rison = require('../index'),
    encode = rison.encode,
    decode = rison.decode;

var buffer;

describe('#escape', function() {
  it('RISON Encoder', function() {
    var testme = { "ami" : "correct", "array": ["one"] };
    buffer = encode(testme)
    console.log(buffer);
    encode(testme).should.equal('(ami:correct,array:!(one))');
  });

});

describe('#unescape', function() {
  it('RISON Decoder', function() {
    var testme = decode(buffer);
    console.log(testme);
    testme.ami.should.equal('correct');
  });

});
