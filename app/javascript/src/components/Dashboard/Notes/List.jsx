import React, {useState} from 'react'

import Note from './Note';
import EditNotePane from './Pane/Edit';
import DeleteAlert from "./DeleteAlert";

const List = ({notes, fetchNotes}) => {

  const [showEdit, setShowEdit] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState([]);

  const onClickEditHandler = (selectedNote) => {
    setSelectedNote(selectedNote);
    setShowEdit(true)
  }

  const onClickDeleteHandler = (selectedNoteId) => {
    setSelectedNoteId([selectedNoteId]);
    setShowDeleteAlert(true)
  }

  return (
    <>
      <div>
        {notes.map( note => (
          <Note
            key={note.id}
            note={note}
            onClickEdit={onClickEditHandler}
            onClickDelete={onClickDeleteHandler}
          />
        ))}
      </div>
      <EditNotePane
          note={selectedNote}
          fetchNotes={fetchNotes}
          showPane={showEdit}
          setShowPane={setShowEdit}
      />
      {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
    </>
  );
}

export default List;
