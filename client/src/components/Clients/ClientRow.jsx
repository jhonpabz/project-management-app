import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../mutations/clientMutations";

const ClientRowComponent = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
  });

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {client.name}
      </TableCell>
      <TableCell>{client.email}</TableCell>
      <TableCell>{client.phone}</TableCell>
      <TableCell>
        <IconButton onClick={deleteClient} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ClientRowComponent;
