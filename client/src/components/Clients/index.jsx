import React from "react";
import { gql, useQuery } from "@apollo/client";
import TableComponent from "./Table";
import { Container } from "@mui/material";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  console.log(data.clients);
  if (loading) return <p>Loading...</p>;
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
