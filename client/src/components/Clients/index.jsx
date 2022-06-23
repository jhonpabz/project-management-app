import React from "react";
import { useQuery } from "@apollo/client";
import ClientRowComponent from "./ClientRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.clients.map((client) => (
                  <ClientRowComponent key={client.id} client={client} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
};

export default Clients;
