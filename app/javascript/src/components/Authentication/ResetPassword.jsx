import React, { useState } from "react";
import { Button, Input } from "neetoui";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center h-full mx-auto lg:w-4/12">
        <h2 className="mb-5 text-3xl font-semibold text-center text-gray-800">
          Forgot your password?
        </h2>
        <div className="w-2/3 mb-5 -mt-4 text-center text-gray-700">
          Enter your email address below and we&apos;ll send you a link to reset
          your password.
        </div>
        <form className="w-full p-8 space-y-4 bg-white border rounded-md shadow">
          <Input
            label="Email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button type="submit" label="Send reset password email" fullWidth />
        </form>
        <div className="mt-4 space-y-2">
          <Button
            label="Sign in instead"
            style="link"
            to="/login"
            className="justify-center"
          />
          <Button
            label="Signup"
            style="link"
            to="/signup"
            className="justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
