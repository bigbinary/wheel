import React, { useState, useEffect } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography, Input, Button, PageLoader } from "@bigbinary/neetoui/v2";
import { Header, MenuBar } from "@bigbinary/neetoui/v2/layouts";

import notesApi from "apis/notes";

//import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";
//import NoteTable from "./NoteTable";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  //const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  //const [searchTerm, setSearchTerm] = useState("");
  //const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      if (notes) {
        true;
      }
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
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
    <div className="flex w-full">
      <MenuBar showMenu={true} title="Notes">
        <MenuBar.Block label="All" count={200} active />
        <MenuBar.Block label="Users" count={80} />
        <MenuBar.Block label="Leads" count={60} />
        <MenuBar.Block label="Visitors" count={60} />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed)
            }
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
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />
            },
            {
              icon: () => <Plus size={20} />
            },
            {
              icon: () => <Settings size={20} />
            }
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
        <MenuBar.Block label="Sales" count={80} />
        <MenuBar.Block label="Finance" count={60} />
        <MenuBar.Block label="User Experience" count={60} />
      </MenuBar>
      <div className="flex flex-col content-start w-full px-5 justify-items-start">
        <Header
          menuBarToggle={true}
          title="All Notes"
          actionBlock={
            <div className="flex">
              <div className="w-80 mr-5">
                <Input
                  prefix={<Search size={16} />}
                  placeholder="Search Name, Email, Phone Number, Etc."
                />
              </div>
              <Button
                onClick={() => setShowNewNotePane(true)}
                label="Add Note"
                icon="ri-add-line"
                iconPosition="right"
                style="primary"
              />
            </div>
          }
        />
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
      </div>
    </div>
  );
};

export default Notes;
