import axios from "axios";

const getBitbucketData = async () => {
  const response = await axios("http://localhost:4000/bitbucket");
  console.log("BitbucketData: ", response.data.values);
  return response;
};
