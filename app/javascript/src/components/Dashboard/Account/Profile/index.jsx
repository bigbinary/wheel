import React, { useEffect, useState } from "react";
import { Input, Button } from "neetoui";
import { Header } from "neetoui/layouts";
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
      <Header title="My Profile" className="border-b border-gray-200" />
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <form className="w-full p-8 space-y-6 bg-white border rounded-lg shadow-sm">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            label="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <Input
            label="Last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
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
