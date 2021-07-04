import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "components/Common/Navbar";

import PasswordEdit from "./Account/Passwords/Edit";
import Profile from "./Account/Profile";
import Notes from "./Notes";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col items-start justify-start flex-grow h-screen overflow-y-auto">
        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/my/password/edit" component={PasswordEdit} />
          <Route exact path="/my/profile" component={Profile} />
          <Redirect from="/" to="/notes" />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
