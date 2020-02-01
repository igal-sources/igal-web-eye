const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const jiraServer = require("./jira-server");
const jenkinsServer = require("./jenkins-server");
const bitbucketServer = require("./bitbucket-server");
const githubServer = require("./github-server");
var port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/jira", (req, res) => {
  jiraServer(req, data => {
    res.send(data);
  });
});

app.get("/bitbucket", (req, res) => {
  bitbucketServer(req, data => {
    res.send(data);
  });
});

app.get("/jenkins", (req, res) => {
  jenkinsServer(req, data => {
    res.send(data);
  });
});

app.get("/github/branch-summary", (req, res) => {
  githubServer.getBranchSummary(req, data => {
    res.send(data);
  });
});

app.get("/github/branch-create", (req, res) => {
  githubServer.createNewLocalBranch(req, data => {
    res.send(data);
  });
});

app.get("/github/branch-delete", (req, res) => {
  githubServer.deleteLocalBranch(req, data => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log("Connected to port " + port);
});
