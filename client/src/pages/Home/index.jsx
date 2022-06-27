import React from "react";
import AddModalClient from "../../components/AddModalClient";
import AddProjectModal from "../../components/AddProjectModal";
import Clients from "../../components/Clients";
import Projects from "../../components/Projects";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AddModalClient />
        <AddProjectModal />
      </Box>
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
