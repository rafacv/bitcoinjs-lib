// {pubKey} OP_CHECKSIG

var bscript = require('../../script')
var OPS = require('bitcoin-ops')

function check (script) {
  var chunks = bscript.decompile(script)

  return chunks.length === 2 &&
    bscript.isCanonicalPubKey(chunks[0]) &&
    chunks[1] === OPS.OP_CHECKSIG
}
check.toJSON = function () { return 'pubKey output' }

function encode (pubKey) {
  return bscript.compile([pubKey, OPS.OP_CHECKSIG])
}

function decode (buffer) {
  var chunks = bscript.decompile(buffer)

  return chunks[0]
}

module.exports = {
  check: check,
  decode: decode,
  encode: encode
}
