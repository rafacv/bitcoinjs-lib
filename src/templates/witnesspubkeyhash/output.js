// OP_0 {pubKeyHash}

var bscript = require('../../script')
var types = require('../../types')
var OPS = require('bitcoin-ops')

function check (script) {
  var buffer = bscript.compile(script)

  return buffer.length === 22 &&
    buffer[0] === OPS.OP_0 &&
    buffer[1] === 0x14
}
check.toJSON = function () { return 'Witness pubKeyHash output' }

function encode (pubKeyHash) {
  return bscript.compile([OPS.OP_0, pubKeyHash])
}

function decode (buffer) {
  return buffer.slice(2)
}

module.exports = {
  check: check,
  decode: decode,
  encode: encode
}
