import React from "react";
import { useFetching } from "services/hooks/useFetching";

const Tasks = () => {
  const { loading, data, error } = useFetching(
    "http://localhost:4000/jira",
    "/search?jql=assignee=igal.leibovich"
  );
  console.log("loading, data, error: ", loading, data, error);
  return (
    <div>
      <h1>Tasks</h1>
      <p>Tasks page body content</p>
    </div>
  );
};

export default Tasks;
