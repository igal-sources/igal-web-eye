import React from "react";
import { useFetching } from "../utils/hooks/useFetching";

const Bitbucket = () => {
  const { loading, data, error } = useFetching("http://localhost:4000/jira");
  console.log('loading, data, error: ', loading, data, error);
  
  return (
    <div>
      <h1>Bitbucket</h1>
      <p>Bitbucket page body content</p>
    </div>
  );
};

export default Bitbucket;
