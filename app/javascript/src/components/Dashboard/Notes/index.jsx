import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Delete, Search, Plus, Settings } from "neetoicons";
import { Button, PageLoader, Typography } from "neetoui";
import { Container, Header, SubHeader, MenuBar } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import { NOTES_TYPES, NOTES_SEGMENTS, NOTES_TAGS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";
import Table from "./Table";

const Notes = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [activeFilter, setActiveFilter] = useState(NOTES_TYPES[0]);
  const [isSegmentSearchCollapsed, setIsSegmentSearchCollapsed] =
    useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => history.push(activeFilter?.path), [activeFilter]);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <MenuBar showMenu title="Notes">
        {NOTES_TYPES.map(filter => (
          <MenuBar.Block
            active={activeFilter.key === filter.key}
            count={filter.count}
            key={filter.key}
            label={filter.label}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSegmentSearchCollapsed(
                  isSegmentSearchCollapsed => !isSegmentSearchCollapsed
                ),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSegmentSearchCollapsed}
          onCollapse={() => setIsSegmentSearchCollapsed(true)}
        />
        {NOTES_SEGMENTS.map(filter => (
          <MenuBar.Block
            active={activeFilter.key === filter.key}
            count={filter.count}
            key={filter.key}
            label={filter.label}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        {NOTES_TAGS.map(filter => (
          <MenuBar.Block
            active={activeFilter.key === filter.key}
            count={filter.count}
            key={filter.key}
            label={filter.label}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </MenuBar>
      <Container>
        <Header
          title="Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add new note"
              size="small"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          <>
            <SubHeader
              rightActionBlock={
                <Button
                  disabled={!selectedNoteIds.length}
                  icon={Delete}
                  label="Delete"
                  size="small"
                  onClick={() => setShowDeleteAlert(true)}
                />
              }
            />
            <Table
              fetchNotes={fetchNotes}
              notes={notes}
              selectedNoteIds={selectedNoteIds}
              setSelectedNoteIds={setSelectedNoteIds}
            />
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add new note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
