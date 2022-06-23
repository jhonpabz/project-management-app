import React from "react";
import { useQuery } from "@apollo/client";
import TableComponent from "./Table";
import { Container } from "@mui/material";
import { GET_CLIENTS } from "../../services/clientQueries";
import LoadingSpinner from "../LoadingSpinner";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error...</p>;
  return (
    <>
      {!loading && !error && (
        <Container>
          <TableComponent clients={data.clients} />
        </Container>
      )}
    </>
  );
};

export default Clients;
