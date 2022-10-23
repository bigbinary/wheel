import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { ABBREVIATIONS_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewAbbreviationPane = ({ fetchAbbreviations, showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add abbreviation
        </Typography>
      </Pane.Header>
      <Form
        abbreviation={ABBREVIATIONS_FORM_INITIAL_FORM_VALUES}
        isEdit={false}
        refetch={fetchAbbreviations}
        onClose={onClose}
      />
    </Pane>
  );
};

export default NewAbbreviationPane;
