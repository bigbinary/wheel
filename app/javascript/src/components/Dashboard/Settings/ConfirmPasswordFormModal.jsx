import React, { useEffect, useRef } from "react";

import { Form, Formik } from "formik";
import { Button, Modal, Typography } from "neetoui";
import { Input } from "neetoui/formik";

import {
  PASSWORD_CONFIRMATION_FORM_INITIAL_VALUES,
  PASSWORD_VALIDATION_SCHEMA,
} from "./constants";

const ConfirmPasswordFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  header = "",
  alertMessage = "",
}) => {
  const innerRef = useRef();

  useEffect(() => {
    innerRef.current?.resetForm?.();
  }, [isOpen]);

  return (
    <Formik
      initialValues={PASSWORD_CONFIRMATION_FORM_INITIAL_VALUES}
      innerRef={innerRef}
      validationSchema={PASSWORD_VALIDATION_SCHEMA}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, handleSubmit }) => (
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.Header>
            <Typography style="h2">{header}</Typography>
          </Modal.Header>
          <Form>
            <Modal.Body>
              {alertMessage && <p className="my-2">{alertMessage}</p>}
              <Input
                autoFocus
                required
                className="my-2"
                label="Current password"
                name="password"
                type="password"
              />
            </Modal.Body>
            <Modal.Footer className="space-x-2">
              <Button
                disabled={isSubmitting || !values.password}
                label="Continue"
                loading={isSubmitting}
                type="submit"
                onClick={handleSubmit}
              />
              <Button
                disabled={isSubmitting}
                label="Cancel"
                style="text"
                type="reset"
                onClick={onClose}
              />
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default ConfirmPasswordFormModal;
