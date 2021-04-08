import React, { useState } from "react";
import { Button, Input } from "neetoui";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen p-6 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Forgot your password?
        </h2>
        <div className="w-2/3 mb-5 -mt-4 text-center text-gray-700">
          Enter your email address below and we&apos;ll send you a link to reset
          your password.
        </div>
        <form className="w-full p-8 space-y-6 bg-white border rounded-md shadow">
          <Input
            label="Email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="flex flex-col items-center justify-center space-y-2">
            <Button type="submit" label="Send reset password email" fullWidth />
            <Button
              label="Back"
              style="link"
              to="/login"
              className="justify-center"
            />
          </div>
        </form>
        <div className="flex flex-row items-center justify-start mt-4 space-x-1">
          <p className="font-normal text-gray-600">Don't have an account?</p>
          <Button
            label="Signup"
            style="link"
            to="/signup"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
