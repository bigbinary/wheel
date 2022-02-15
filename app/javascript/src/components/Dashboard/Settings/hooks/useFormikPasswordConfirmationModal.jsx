import { useState, useRef } from "react";

import { PASSWORD_CONFIRMATION_FORM_INITIAL_VALUES } from "../constants";

export const useFormikPasswordConfirmationModal = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState(
    PASSWORD_CONFIRMATION_FORM_INITIAL_VALUES["password"]
  );
  const formRef = useRef();

  const closeModal = () => {
    setShowPasswordModal(false);
  };

  const handlePasswordConfirmation = passwordFormValues => {
    setPassword(passwordFormValues["password"]);
    setShowPasswordModal(false);
    formRef.current?.submitForm();
  };

  return {
    showPasswordModal,
    setShowPasswordModal,
    password,
    formRef,
    closeModal,
    handlePasswordConfirmation,
  };
};
