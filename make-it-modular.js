const mymodule = require('./mymodule.js');

let directory = process.argv[2];
let ext = '.' + process.argv[3];

mymodule(directory, ext, (err, files) => {
  !err
    ? files.map((file) => {
        console.log(file);
      })
    : console.log(err);
});
