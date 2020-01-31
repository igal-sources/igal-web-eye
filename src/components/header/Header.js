import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Menu } from "semantic-ui-react";
import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();

  const dashboardClassName = classNames({
    "Header-link": true,
    active: path === ""
  });
  const tasksClassName = classNames({
    "Header-link": true,
    active: path === "tasks"
  });
  const bitbucketClassName = classNames({
    "Header-link": true,
    active: path === "bitbucket"
  });
  const jenkinsClassName = classNames({
    "Header-link": true,
    active: path === "jenkins"
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
        <Route path="/" />
        <Route path="/tasks" />
        <Route path="/jenkins" />
        <Route path="/bitbucket" />
      </Menu>
    </>
  );
};

export default Header;