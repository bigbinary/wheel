import React from "react";
import { Toastr } from "nitroui";
import { toast, Slide } from "react-toastify";

export const showToastr = message => {
  toast.success(<Toastr type="success" message={message} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const isError = e => e && e.stack && e.message;

export const showErrorToastr = error => {
  let errorMessage = error;
  if (isError(error)) {
    errorMessage = error.message;
  }
  toast.error(<Toastr type="error" message={errorMessage} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};
