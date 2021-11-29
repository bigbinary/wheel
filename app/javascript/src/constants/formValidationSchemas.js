import * as Yup from "yup";

export default {
  loginForm: Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  }),
  resetPasswordForm: Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
  }),
  signupForm: Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  }),
  profileForm: Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  }),
  notesForm: Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    contact: Yup.string().required("Assigned contact is required"),
    tags: Yup.string().required("Tag is required"),
  }),
};
