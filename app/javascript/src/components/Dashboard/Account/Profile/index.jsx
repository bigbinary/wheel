import React, { useEffect, useState } from "react";
import { Input, Button } from "neetoui";
import { PageHeading } from "neetoui/layouts";
import { useUserState } from "contexts/user";

const Profile = () => {
  const { user } = useUserState();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.first_name);
      setLastName(user.last_name);
    }
  }, [user]);

  return (
    <>
      <PageHeading title="My Profile" />
      <div className="flex flex-col items-center justify-center flex-grow w-full h-full py-20 mx-auto lg:w-5/12">
        <form className="w-full px-10 py-8 space-y-4 bg-white border rounded-lg shadow-sm">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            required
          />
          <Input
            label="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            name="first_name"
            required
          />
          <Input
            label="Last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            name="last_name"
            required
          />
          <Input
            label="Current password"
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            required
          />
          <Button type="submit" label="Update" fullWidth />
        </form>
      </div>
    </>
  );
};

export default Profile;
