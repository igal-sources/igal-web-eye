import axios from "axios";

const bitbucketUrl = "https://api.bitbucket.org/2.0/";
const bitbucketUserName = "igalleibovich";

const token = "7yYAhyuHCVpFVuRupzmV";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
  method: "GET",
  baseURL: `${proxyUrl}${bitbucketUrl}`,
  auth: { username: bitbucketUserName, password: token }
});
