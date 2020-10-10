import React, { useState } from "react";
import { Link } from "react-router-dom";

const New = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="wrapper flex flex-grow">
      <div className="flex-col container mx-auto px-4">
        <div className="flex flex-col flex-grow h-full w-full items-center justify-center lg:w-5/12 mx-auto py-20">
          <h2 className="text-2xl text-center font-medium mb-5 text-gray-800">
            Forgot your password?
          </h2>
          <div className="text-center text-gray-600 mb-5 w-2/3 -mt-4">
            Enter your email address below and we&apos;ll send you a link to
            reset your password.
          </div>
          <form
            className="simple_form bg-white / border shadow-sm / rounded-lg px-10 py-8 / w-full"
            id="new_user"
          >
            <div className="form-group mb-8 email required user_email">
              <div>
                <label
                  className="email required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="user_email"
                >
                  Email
                </label>
              </div>
              <div className="controls">
                <input
                  className="string email required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md hover:border-gray-600 focus:border-gray-600 focus:outline-none transition duration-200 ease-in-out"
                  autoFocus
                  required
                  aria-required="true"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  name="email"
                  id="user_email"
                />
              </div>
            </div>
            <input
              type="submit"
              name="commit"
              value="Send reset password email"
              className="btn btn font-semibold text-base text-white / px-4 py-2 w-full rounded-md / bg-teal-600 border border-teal-600 / cursor-pointer / hover:opacity-75 / transition duration-200 ease-in-out"
              data-disable-with="Send reset password email"
            />
          </form>
          <div className="mt-2 text-center">
            <Link
              className="block text-teal-600 hover:text-black mt-2"
              to="/login"
            >
              Sign in instead
            </Link>
            <Link
              className="block text-teal-600 hover:text-black mt-2"
              to="/signup"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
