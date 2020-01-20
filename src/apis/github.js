import axios from "axios";

const getGithubData = async (callback) => {
  const response = await axios("http://localhost:4000/github/branch-summary");
  callback(response);
};

const createNewLocalBranch = async () => {
  const response = await axios("http://localhost:4000/github/branch-create", {
    params: {
      branchName: "DP-0000-TEST"
    }
  });
  console.log("createNewLocalBranch: ", response);
  return response;
};

const deleteLocalBranch = async () => {
  const response = await axios("http://localhost:4000/github/branch-delete", {
    params: {
      branchName: "DP-0000-TEST"
    }
  });
  console.log("deleteBranch: ", response);
  return response;
};

export { getGithubData };
