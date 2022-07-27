var urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
var customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    var id = ''
    var i = size
    while (i--) {
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}
var nanoid = (size = 21) => {
  var id = ''
  var i = size
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}
module.exports = { nanoid, customAlphabet }
