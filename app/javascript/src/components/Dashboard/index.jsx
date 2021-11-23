import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "components/Common/Navbar";

import PasswordEdit from "./Account/Passwords/Edit";
import Profile from "./Account/Profile";
import Notes from "./Notes";

const Home = () => {
  return (
    <div className="flex flex-row items-start justify-start">
      <Navbar />
      <div className="relative flex flex-row flex-grow h-screen overflow-auto">
        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/my/password/edit" component={PasswordEdit} />
          <Route exact path="/my/profile" component={Profile} />
          <Redirect from="/" to="/notes" />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
