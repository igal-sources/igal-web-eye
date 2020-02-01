module.exports = exports = function(req, callback) {
  var request = require("request");

  var options = {
    method: "GET",
    url: "https://brightmachines.atlassian.net/rest/api/2" + req.query.queryParams,
    headers: {
      Authorization:
        "Basic aWdhbC5sZWlib3ZpY2hAYnJpZ2h0bWFjaGluZXMuY29tOmpCTTZFUFQyem9ZYnM1bnM4UlV3MDUxQQ=="
    }
  };
  request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log("Jira-server done.");
    callback(response.body);
  });
};
