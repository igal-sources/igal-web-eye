import axios from "axios";

const getJiraUserAssigneeIssues = async callback => {
  const response = await axios("http://localhost:4000/jira");
  callback(response);
};

export { getJiraUserAssigneeIssues };
