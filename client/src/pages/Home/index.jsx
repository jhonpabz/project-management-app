import React from "react";
import AddModalClient from "../../components/AddModalClient";
import Clients from "../../components/Clients";
import Projects from "../../components/Projects";
const Home = () => {
  return (
    <>
      <AddModalClient />
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
