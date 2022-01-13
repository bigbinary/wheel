import * as yup from "yup";

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
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES = {
  type: "password",
  "aria-required": "true",
  placeholder: "******",
};

export const PROFILE_FORM_VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  password: yup.string().required("Required"),
});
