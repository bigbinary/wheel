import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Sidebar from "components/commons/Sidebar";
import {
  DASHBOARD_ROUTES,
  NOTES_PATH,
  DASHBOARD_PATH,
} from "components/routeConstants";

const Dashboard = () => (
  <div className="flex h-screen w-full">
    <Sidebar />
    <Switch>
      {DASHBOARD_ROUTES.map(({ path, component }) => (
        <Route exact component={component} key={path} path={path} />
      ))}
      <Redirect from={DASHBOARD_PATH} to={NOTES_PATH} />
    </Switch>
  </div>
);

export default Dashboard;
