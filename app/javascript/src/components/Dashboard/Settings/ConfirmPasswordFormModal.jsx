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
      innerRef={innerRef}
      initialValues={PASSWORD_CONFIRMATION_FORM_INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={PASSWORD_VALIDATION_SCHEMA}
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
                required
                autoFocus
                name="password"
                label="Current password"
                type="password"
                className="my-2"
              />
            </Modal.Body>
            <Modal.Footer className="space-x-2">
              <Button
                type="submit"
                label="Continue"
                size="large"
                onClick={handleSubmit}
                loading={isSubmitting}
                disabled={isSubmitting || !values.password}
              />
              <Button
                style="text"
                label="Cancel"
                onClick={onClose}
                size="large"
                disabled={isSubmitting}
              />
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default ConfirmPasswordFormModal;
