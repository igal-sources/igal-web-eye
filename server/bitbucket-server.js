module.exports = exports = function(callback) {
  var request = require("request");
  var options = {
    method: "GET",
    url: "https://api.bitbucket.org/2.0/repositories/brightmachines/bright-lab-app/pullrequests",
    headers: {
      Authorization: "Basic aWdhbGxlaWJvdmljaDo3eVlBaHl1SENWcEZWdVJ1cHptVg=="
    }
  };
  request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log("bitbucket-server done.");
    callback(response.body);
  });
};
