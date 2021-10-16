let fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
  !err ? console.log(data.toString().split('\n').length - 1) : console.log(err);
});
