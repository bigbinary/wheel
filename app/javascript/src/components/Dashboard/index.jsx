import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "components/Common/Navbar";

import PasswordEdit from "./Users/Passwords/Edit";
import Contact from "./Contact";
import Profile from "./Users/Profile";
import Features from "./Features";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <Switch>
        <Route exact path="/features" component={Features} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/my/password/edit" component={PasswordEdit} />
        <Route exact path="/my/profile" component={Profile} />
        <Redirect from="/" to="/features" />
      </Switch>
    </div>
  );
};

export default Home;
