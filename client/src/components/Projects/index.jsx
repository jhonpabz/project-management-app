import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../services/projectQueries";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log("projects data:", data);
  if (loading) return <LoadingSpinner />;
  if (error) return <h1>Something Went Wrong</h1>;
  return (
    <>
      {data.projects.length > 0 ? (
        <div>
          {data.projects.map((project) => (
            // <ProjectCard key={project.id} project={project} />
            <div key={project.id}>
              <p>{project.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
