import React from 'react';

import Container from "./Note/Container";
import Header from './Note/Header';
import Footer from './Note/Footer';
import Content from './Note/Content';

const Note = ({note, onClickEdit, onClickDelete}) => {
  return (
  <Container key={note.id}>
      <Header note={note} onClickEdit={onClickEdit} onClickDelete={onClickDelete}/>
      <Content description={note.description}/>
      <Footer />
  </Container>
  );
}

export default Note;
