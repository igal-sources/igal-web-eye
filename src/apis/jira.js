import axios from "axios";

const jiraUrl = "https://brightmachines.atlassian.net/rest/api/2";
const jiraUserName = "igal.leibovich@brightmachines.com";

const token = "jBM6EPT2zoYbs5ns8RUw051A";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
  method: "GET",
  baseURL: `${proxyUrl}${jiraUrl}`,
  auth: { username: jiraUserName, password: token }
});
