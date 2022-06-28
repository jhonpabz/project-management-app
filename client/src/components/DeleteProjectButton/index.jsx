import React from "react";
import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from "../../services/projectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../../mutations/projectMutations";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={deleteProject}
      >
        Delete Project
      </Button>
    </>
  );
};

export default DeleteProjectButton;
