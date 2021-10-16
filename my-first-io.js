let fs = require('fs');
let buf = fs.readFileSync(process.argv[2]);
let str = buf.toString().split('\n');
console.log(str.length - 1);
