import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Sidebar from "components/Common/Sidebar";

import PasswordEdit from "./Account/Passwords/Edit";
import Profile from "./Account/Profile";
import Contacts from "./Contacts";
import Notes from "./Notes";

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <Switch>
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/my/password/edit" component={PasswordEdit} />
        <Route exact path="/my/profile" component={Profile} />
        <Redirect from="/" to="/notes" />
      </Switch>
    </div>
  );
};

export default Home;
