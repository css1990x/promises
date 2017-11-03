/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var GitHubHelpers = require('./promisification.js'); 
var additionalHelpers = require('./promiseConstructor.js'); 

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return additionalHelpers.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(profile) {
      console.log('we have found our name and it is: ', profile);
      GitHubHelpers.getGitHubProfileAsync(profile)
      .then(function(profile) {
        additionalHelpers.writeToFileAsync(writeFilePath, profile);
      }); 
    });
};
      // getGitHubProfileAsync('someRealUser')
      //   .then(function(profile) {
      //     expect(profile.id).to.equal(12345);
      //     done();
      //   })

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
