import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ProjectCard = ({ project }) => {
  return (
    <Box sx={{ m: 1 }}>
      <Grid item xs={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {project.name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
