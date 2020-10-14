import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "components/Common/Navbar";

import PasswordEdit from "./Account/Passwords/Edit";
import Profile from "./Account/Profile";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="content-main">
        <Switch>
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/my/password/edit" component={PasswordEdit} />
          <Route exact path="/my/profile" component={Profile} />
          <Redirect from="/" to="/features" />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
