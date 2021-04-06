import React, { useState } from "react";
import { Button, Input } from "neetoui";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const linkBaseClass =
    "block mt-2 text-base text-indigo-500 no-underline transition-all duration-300 ease-in-out hover:text-indigo-600";

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
        <div className="mt-2 text-center">
          <Link className={linkBaseClass} to="/login">
            Sign in instead
          </Link>
          <Link className={linkBaseClass} to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
