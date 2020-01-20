import axios from "axios";

const getJenkinsData = async callback => {
  const response = await axios("http://localhost:4000/jenkins");
  callback(response);
};

export { getJenkinsData };
