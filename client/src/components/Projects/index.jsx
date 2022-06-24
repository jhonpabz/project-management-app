import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../services/projectQueries";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <LoadingSpinner />;
  if (error) return <h1>Something Went Wrong</h1>;
  return (
    <>
      <h1>Prjects Here</h1>
    </>
  );
};

export default Projects;
