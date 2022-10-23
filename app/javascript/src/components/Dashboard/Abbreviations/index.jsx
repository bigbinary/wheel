import React, { useState, useEffect } from "react";

import EmptyAbbreviationsListImage from "images/EmptyNotesList";
import { Delete } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header, SubHeader } from "neetoui/layouts";

import abbreviationsApi from "apis/abbreviations";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import NewAbbreviationPane from "./Pane/Create";
import Table from "./Table";

const Abbreviations = () => {
  const [loading, setLoading] = useState(true);
  const [showNewAbbreviationPane, setShowNewAbbreviationPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedAbbreviationIds, setSelectedAbbreviationIds] = useState([]);
  const [abbreviations, setAbbreviations] = useState([]);

  useEffect(() => {
    fetchAbbreviations();
  }, []);

  const fetchAbbreviations = async () => {
    try {
      setLoading(true);
      const {
        data: { abbreviations },
      } = await abbreviationsApi.fetch();
      setAbbreviations(abbreviations);
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
    <Container>
      <Header
        title="Abbreviations"
        actionBlock={
          <Button
            label="Add abbreviation"
            size="small"
            onClick={() => setShowNewAbbreviationPane(true)}
          />
        }
      />
      {abbreviations.length ? (
        <>
          <SubHeader
            rightActionBlock={
              <Button
                disabled={!selectedAbbreviationIds.length}
                icon={Delete}
                label="Delete"
                size="small"
                style="danger"
                onClick={() => setShowDeleteAlert(true)}
              />
            }
          />
          <Table
            abbreviations={abbreviations}
            fetchAbbreviations={fetchAbbreviations}
            selectedAbbreviationIds={selectedAbbreviationIds}
            setSelectedAbbreviationIds={setSelectedAbbreviationIds}
          />
        </>
      ) : (
        <EmptyState
          image={EmptyAbbreviationsListImage}
          primaryAction={() => setShowNewAbbreviationPane(true)}
          primaryActionLabel="Add abbreviation"
          subtitle="Add abbreviations on psmf documents."
          title="Looks like you don't have any abbreviations!"
        />
      )}
      <NewAbbreviationPane
        fetchAbbreviations={fetchAbbreviations}
        setShowPane={setShowNewAbbreviationPane}
        showPane={showNewAbbreviationPane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchAbbreviations}
          selectedAbbreviationIds={selectedAbbreviationIds}
          setSelectedAbbreviationIds={setSelectedAbbreviationIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Abbreviations;
