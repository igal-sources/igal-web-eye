const workingDir = "/Users/igal.leibovich/bright-machines/bright-lab-app"; // As parameter
const git = require("simple-git/promise");

module.exports = exports = async function(callback) {
  let branchSummaryResult = null;
  try {
    branchSummary1 = await git(workingDir).branchLocal(function(err, branchSummary) {
      callback(branchSummary);
    });
  } catch (e) {
    // handle the error
  }
};

async function branch(workingDir) {
  let branchSummaryResult = null;
  try {
    branchSummary1 = await git(workingDir).branchLocal(function(err, branchSummary) {
      branchSummaryResult = branchSummary;
      console.log("branchSummaryResult: ", branchSummaryResult);
    });
  } catch (e) {
    // handle the error
  }

  return branchSummaryResult;
}

// const res = branch(workingDir).then(branchSummaryResult =>
//   console.log("branchResult: ", branchSummaryResult)
// );
// console.log("res: ", res);
