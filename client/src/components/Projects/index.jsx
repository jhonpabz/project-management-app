import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../services/projectQueries";
import ProjectCard from "../ProjectCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <LoadingSpinner />;
  if (error) return <h1>Something Went Wrong</h1>;
  return (
    <>
      {data.projects.length > 0 ? (
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {data.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Grid>
          </Box>
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
