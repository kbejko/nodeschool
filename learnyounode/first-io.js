var fs = require('fs');

var bufferFile = fs.readFileSync(process.argv[2])
var stringBuffer = bufferFile.toString()
var splitBuffer = stringBuffer.split('\n')
var count = splitBuffer.length - 1
console.log(count);
