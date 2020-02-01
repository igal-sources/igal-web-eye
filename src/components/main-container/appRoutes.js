import React from "react";
import { Route, Switch } from "react-router-dom";
import Bitbucket from "../Bitbucket";
import Jenkins from "../Jenkins";
import Tasks from "../Tasks";
import Dashboard from "../Dashboard";
import Settings from '../main-container/Settings'
import NotFoundPage from './not-found-page/NotFoundPage'

export default () => (
  <Switch>
    <Route path={"/settings"} component={Settings} />
    <Route path={"/bitbucket"} component={Bitbucket} />
    <Route path={"/jenkins"} component={Jenkins} />
    <Route path={"/tasks"} component={Tasks} />
    <Route exact path="/" component={Dashboard} />
    <Route component={NotFoundPage} />
  </Switch>
);
