const workingDir = "/Users/igal.leibovich/bright-machines/bright-lab-app"; // As parameter
const git = require("simple-git/promise")(workingDir);

exports.getBranchSummary = async (req, callback) => {
  try {
    await git.branchLocal(function(err, branchSummary) {
      callback(branchSummary);
    });
  } catch (e) {
    console.log(e);
  }
};
// Create new branch and make it current = true
exports.createNewLocalBranch = async (request, callback) => {
  try {
    await git.checkoutLocalBranch(request.query.branchName, function(err, branchSummary) {
      callback(branchSummary);
    });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteLocalBranch = async (request, callback) => {
  try {
    await git.deleteLocalBranch(request.query.branchName, function(err, branchSummary) {
      callback(branchSummary);
    });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteBranch = async () => {
  try {
    var options = ["--delete", "DP-xxxx-test"];
    await git.branch(options);
  } catch (e) {
    console.log(e);
  }
};
