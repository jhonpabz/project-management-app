import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../../services/projectQueries";
import { UPDATE_PROJECT } from "../../mutations/projectMutations";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      return alert("Please fill in all  fields");
    }

    updateProject(name, description, status);
  };

  return (
    <>
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Project
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <Box sx={{ mt: 1 }}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Description"
              style={{ width: "100%" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>

          <FormControl
            fullWidth
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="new">Not Started</MenuItem>
              <MenuItem value="progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ mt: 2 }}>
            <Button type="Submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default EditProjectForm;
