/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, function(err, data) {
    if (err) {
      callback(err); 
    }
    callback(err, data.toString().split('\n')[0]);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, data) {
    if (err) { 
      return callback(err); 
    }
    module.exports.getStatusCode = data.statusCode; 
    callback(err, data.statusCode); 
  }); 
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
