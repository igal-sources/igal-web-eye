import React from "react";
import { Route, Switch } from "react-router-dom";
import Bitbucket from "./Bitbucket";
import Jenkins from "./Jenkins";
import Tasks from "./Tasks";
import Dashboard from "./Dashboard";

export default () => (
  <Switch>
    <Route path={"/bitbucket"} component={Bitbucket} />
    <Route path={"/jenkins"} component={Jenkins} />
    <Route path={"/tasks"} component={Tasks} />
    <Route exact path="/" component={Dashboard} />
  </Switch>
);
