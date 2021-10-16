var fs = require('fs');
var path = require('path');
var filteredList = [];

module.exports = (directory, ext, callback) => {
  fs.readdir(directory, (err, files) => {
    !err
      ? files.map((file) => {
          path.extname(file) === ext ? filteredList.push(file) : null;
        })
      : callback(err);
    return callback(null, filteredList);
  });
};
