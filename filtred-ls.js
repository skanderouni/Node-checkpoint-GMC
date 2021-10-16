const fs = require('fs');
const path = require('path');
let ext = '.' + process.argv[3];
fs.readdir(process.argv[2], (err, files) => {
  !err
    ? files.map((file) => {
        path.extname(file) === ext ? console.log(file) : null;
      })
    : console.log(err);
});
