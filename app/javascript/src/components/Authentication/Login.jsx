import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Formik } from "formik";
import { Input as FormikInput } from "neetoui/formik";
import { setAuthHeaders } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";
import { Button, Toastr } from "neetoui";
import authenticationApi from "apis/authentication";

const Login = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const handleSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      const {
        data: { auth_token, user, is_admin },
      } = await authenticationApi.login({ user: { email, password } });
      authDispatch({ type: "LOGIN", payload: { auth_token, email, is_admin } });
      userDispatch({ type: "SET_USER", payload: { user } });
      setAuthHeaders();
      history.push("/");
      Toastr.success("Logged in successfully.");
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen p-6 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Sign In
        </h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="w-full p-8 space-y-6 bg-white border rounded-md shadow">
            <FormikInput
              name="email"
              type="email"
              placeholder="oliver@example.com"
              required
              label="Email"
            />
            <FormikInput
              name="password"
              type="password"
              placeholder="******"
              required
              label="Password"
            />
            <Button type="submit" loading={loading} fullWidth label="Login" />
          </Form>
        </Formik>
        <div className="flex flex-col items-center justify-center mt-4 space-y-2">
          <div className="flex flex-row items-center justify-start space-x-1">
            <p className="font-normal text-gray-600">{`Don't have an account?`}</p>
            <Button label="Signup" style="link" to="/signup" />
          </div>
          <Button label="Forgot password?" style="link" to="/my/password/new" />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
