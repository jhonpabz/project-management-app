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
        <CardContent>
          <Typography variant="h4" gutterBottom component="div">
            {data.project.name}
          </Typography>
          <Typography variant="overline" display="block" component="div">
            {data.project.description}
          </Typography>
          <Typography display="block" component="div" gutterBottom>
            Status: {data.project.status}
          </Typography>

          <ClientInfo client={data.project.client} />
        </CardContent>
        <CardActions>
          <Link href="/" underline="none">
            <Button size="small">Back</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Project;
