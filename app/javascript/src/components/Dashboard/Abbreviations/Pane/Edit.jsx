import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const EditAbbreviationPane = ({
  fetchAbbreviations,
  showPane,
  setShowPane,
  abbreviation,
}) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit abbreviation
        </Typography>
      </Pane.Header>
      <Form
        isEdit
        abbreviation={abbreviation}
        refetch={fetchAbbreviations}
        onClose={onClose}
      />
    </Pane>
  );
};

export default EditAbbreviationPane;
