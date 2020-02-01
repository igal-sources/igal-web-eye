import React, { useState, useEffect } from "react";
import { Link, Route, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Menu, Icon } from "semantic-ui-react";
import { StoreContext } from "../../../services/store";
import { useFetching } from "services/hooks/useFetching";
import * as types from "shared/types";
import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const store = React.useContext(StoreContext);
  const { loading, data, error } = useFetching("/jira", "/myself?");
  const [userProfile, setUserProfile] = useState(data)
  
  useEffect(() => {
    const {key, accountId, name, emailAddress, displayName} = data;
    console.log('accountId: ', accountId);
    store.setUserProfile({
      key: key,
      accountId: accountId,
      name: name,
      emailAddress: emailAddress,
      displayName: displayName
    });
    localStorage.setItem("userName", displayName);
    return () => {};
  }, [data]);


  const dashboardClassName = classNames({
    "Header-link": true,
    active: path === ""
  });
  const tasksClassName = classNames({
    "Header-link": true,
    active: path === types.TASKS
  });
  const bitbucketClassName = classNames({
    "Header-link": true,
    active: path === types.BITBUCKET
  });
  const jenkinsClassName = classNames({
    "Header-link": true,
    active: path === types.JENKINS
  });

  return (
    <>
      <Menu id="Header-mainMenu" className="Header-mainMenu">
        <div className="Header-links">
          <Link to="/" className={dashboardClassName}>
            Dashboard
          </Link>
          <Link to="/tasks" className={tasksClassName}>
            Tasks
          </Link>
          <Link to="/bitbucket" className={bitbucketClassName}>
            Bitbucket
          </Link>
          <Link to="/jenkins" className={jenkinsClassName}>
            Jenkins
          </Link>
        </div>
        <Menu.Item
          position="right"
          className="Header-menuItem-settings"
          active={pathname.startsWith("settings", 1)}
          as={Link}
          to={"/settings"}
        >
          <Icon id="Header-settings-tooltip" size="big" name="setting" />
        </Menu.Item>
        <Menu.Item
          className="Header-menuItem-user"
          active={pathname.startsWith("user", 1)}
          as={Link}
          to={"/user"}
        >
          {store.userName}
        </Menu.Item>
        <Route path="/" />
        <Route path="/tasks" />
        <Route path="/jenkins" />
        <Route path="/bitbucket" />
      </Menu>
    </>
  );
};

export default Header;
