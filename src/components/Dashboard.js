import React, { useState } from "react";
import { StoreContext } from "../services/store";

const Dashboard = () => {
  const store = React.useContext(StoreContext);
  const [userName, setUserName] = useState(store.useName);
  console.log("store: ", store.userName);

  const handleChangeName = e => {
    store.setUserName("Igal");
    localStorage.setItem("name", "Igal");
  };

  handleChangeName();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard page body content</p>
    </div>
  );
};

export default Dashboard;
