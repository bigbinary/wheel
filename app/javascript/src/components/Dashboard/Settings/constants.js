import * as yup from "yup";

import Email from "./Email";
import Password from "./Password";
import Profile from "./Profile";

export const SETTINGS_NAVLINKS = [
  {
    key: "profile",
    label: "Profile",
    description: "Manage user",
    path: "/settings?tab=profile",
    component: Profile,
  },
  {
    key: "email",
    label: "Email",
    description: "Manage email",
    path: "/settings?tab=email",
    component: Email,
  },
  {
    key: "password",
    label: "Password",
    description: "Manage password",
    path: "/settings?tab=password",
    component: Password,
  },
];

export const PROFILE_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
});

export const PASSWORD_VALIDATION_SCHEMA = yup.object().shape({
  password: yup.string().required("Required"),
});

export const EMAIL_FORM_VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
});

export const PASSWORD_CONFIRMATION_FORM_INITIAL_VALUES = {
  password: "",
};

export const CHANGE_PASSWORD_FORM_INITIAL_VALUES = {
  currentPassword: "",
  password: "",
  passwordConfirmation: "",
};

export const CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA = yup.object({
  currentPassword: yup.string().required("Current password is required"),
  password: yup.string().required("New password is required"),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf(
      [yup.ref("password"), null],
      "New password and confirmation password must match"
    ),
});

export const CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES = {
  type: "password",
  "aria-required": "true",
  placeholder: "******",
};
