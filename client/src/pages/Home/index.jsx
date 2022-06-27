import React from "react";
import AddModalClient from "../../components/AddModalClient";
import AddProjectModal from "../../components/AddProjectModal";
import Clients from "../../components/Clients";
import Projects from "../../components/Projects";
const Home = () => {
  return (
    <>
      <AddModalClient />
      <AddProjectModal />
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
