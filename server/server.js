const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const jiraServer = require("./jira-server");
const jenkinsServer = require("./jenkins-server");
const bitbucketServer = require("./bitbucket-server");
var port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/jira", (req, res) => {
  jiraServer(data => {
    res.send(data);
  });
});

app.get("/bitbucket", (req, res) => {
  bitbucketServer(data => {
    res.send(data);
  });
});

app.get("/jenkins", (req, res) => {
  jenkinsServer(data => {
    res.send(data);
  });
});

//TODO: Separate to difference ports
app.listen(port, () => {
  console.log("Connected to port " + port);
});
