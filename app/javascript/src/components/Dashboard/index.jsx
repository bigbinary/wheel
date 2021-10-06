import React, { useState } from "react";

import * as neetoIcons from "@bigbinary/neeto-icons";
import * as v2 from "@bigbinary/neetoui/v2";
import * as layouts from "@bigbinary/neetoui/v2/layouts";
import { Route, Redirect, Switch } from "react-router-dom";

// import Navbar from "components/Common/Navbar";

import PasswordEdit from "./Account/Passwords/Edit";
import Profile from "./Account/Profile";
import Notes from "./Notes";

const NotesMenuBar = () => (
  <div className="text-gray-500">
    <div className="flex justify-between my-6 p-2 bg-white rounded-sm shadow text-black">
      <v2.Typography style="body2">All</v2.Typography>
      <v2.Typography style="body2">200</v2.Typography>
    </div>
    <div className="flex justify-between my-4 px-2">
      <v2.Typography style="body2">Users</v2.Typography>
      <v2.Typography style="body2">80</v2.Typography>
    </div>
    <div className="flex justify-between my-6 px-2">
      <v2.Typography style="body2">Leads</v2.Typography>
      <v2.Typography style="body2">60</v2.Typography>
    </div>
    <div className="flex justify-between my-6 px-2">
      <v2.Typography style="body2">Visitors</v2.Typography>
      <v2.Typography style="body2">60</v2.Typography>
    </div>
    <div className="flex justify-between mt-10 text-black">
      <v2.Typography style="h5">SEGMENTS</v2.Typography>
      <neetoIcons.Search />
    </div>
    <div className="flex justify-between my-6 px-2">
      <v2.Typography style="body2">Europe</v2.Typography>
      <v2.Typography style="body2">80</v2.Typography>
    </div>
    <div className="flex justify-between my-6 px-2">
      <v2.Typography style="body2">Middle-East</v2.Typography>
      <v2.Typography style="body2">60</v2.Typography>
    </div>
    <div className="flex justify-between my-6 px-2">
      <v2.Typography style="body2">Asia</v2.Typography>
      <v2.Typography style="body2">60</v2.Typography>
    </div>
    <div className="flex justify-between mt-10 text-black">
      <v2.Typography style="h5">Tags</v2.Typography>
      <div className="flex gap-6">
        <neetoIcons.Search />
        <neetoIcons.Plus />
        <neetoIcons.Settings />
      </div>
    </div>
    <div className="flex justify-between my-6 px-2">
      <v2.Typography style="body2">Sales</v2.Typography>
      <v2.Typography style="body2">60</v2.Typography>
    </div>
    <div className="flex justify-between my-6 px-2">
      <v2.Typography style="body2">Finance</v2.Typography>
      <v2.Typography style="body2">80</v2.Typography>
    </div>
    <div className="flex justify-between my-6 px-2">
      <v2.Typography style="body2">User Experience</v2.Typography>
      <v2.Typography style="body2">80</v2.Typography>
    </div>
  </div>
);

const Home = () => {
  const [showNotesMenuBar, setShowNotesMenuBar] = useState(false);
  return (
    <div className="flex h-screen">
      <layouts.Sidebar
        navLinks={[
          { label: "Notes", to: "/notes", icon: neetoIcons.Info },
          { label: "Contacts", to: "#", icon: neetoIcons.UserCircle },
          { label: "Settings", to: "#", icon: neetoIcons.NeetoInsights }
        ]}
      />
      <layouts.MenuBar
        title={<span className="mb-6">Notes</span>}
        showMenu={showNotesMenuBar}
      >
        <NotesMenuBar />
      </layouts.MenuBar>
      <div className="flex flex-col items-start justify-start flex-grow h-screen overflow-y-auto">
        <Switch>
          <Route
            exact
            path="/notes"
            component={() => (
              <Notes setShowNotesMenuBar={setShowNotesMenuBar} />
            )}
          />
          <Route exact path="/my/password/edit" component={PasswordEdit} />
          <Route exact path="/my/profile" component={Profile} />
          <Redirect from="/" to="/notes" />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
