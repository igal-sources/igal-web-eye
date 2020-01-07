import React from "react";
import jira from "../apis/jira";
import bitbucket from "../apis/bitbucket";

const App = () => {
  const testJira = async () => {
    const jiraResponse = await jira.get("/search?jql=assignee=igal.leibovich");
    console.log("JiraResponse: ", jiraResponse.data.issues);
  };

  testJira();

  const testBitbucket = async () => {
    const bitbucketResponse = await bitbucket.get(
      "/repositories/brightmachines/bright-lab-app/pullrequests"
    );
    console.log("bitbucketResponse: ", bitbucketResponse.data.values);
  };

  testBitbucket();

  return <div>App</div>;
};

export default App;
