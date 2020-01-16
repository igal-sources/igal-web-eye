module.exports = exports = function(callback) {
  var request = require("request");

  var options = {
    method: "GET",
    url: "https://jenkins.cicd.brightmachines.com/api/json?depth=2",
    headers: {
      Authorization: "Basic aWdhbGxlaWJvdmljaDoxMTk0MzExNDIzZjBmMzFlNmQzZmQyYjNhMjU5YTk3OGY3"
    }
  };
  request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log("Jenkins-server done.");
    callback(response.body);
  });
};
