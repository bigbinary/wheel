import React from "react";

import Container from "./Note/Container";
import Content from "./Note/Content";
import Footer from "./Note/Footer";
import Header from "./Note/Header";

const Note = ({ note, onClickEdit, onClickDelete }) => (
  <Container key={note.id}>
    <Header
      note={note}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
    />
    <Content description={note.description} />
    <Footer />
  </Container>
);

export default Note;
