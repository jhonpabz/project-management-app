import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../services/projectQueries";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ClientInfo from "../../components/ClientInfo";
import DeleteProjectButton from "../../components/DeleteProjectButton";
import { Box } from "@mui/material";
import EditProjectForm from "../../components/EditProjectForm";
import Grid from "@mui/material/Grid";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <>
      <Card sx={{ mt: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom component="div">
              {data.project.name}
            </Typography>
            <Typography variant="overline" display="block" component="div">
              {data.project.description}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography color="text.secondary" gutterBottom>
                Status:
              </Typography>
              <Typography display="block" component="div" gutterBottom>
                {data.project.status}
              </Typography>
            </Box>
          </CardContent>
          <Box sx={{ m: 2 }}>
            <Link href="/" underline="none">
              <Button size="small">Back</Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ m: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ClientInfo client={data.project.client} />
            </Grid>
            <Grid item xs={12} md={6}>
              <EditProjectForm project={data.project} />
            </Grid>
          </Grid>
        </Box>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <DeleteProjectButton projectId={data.project.id} />
        </CardActions>
      </Card>
    </>
  );
};

export default Project;
