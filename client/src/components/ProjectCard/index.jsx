import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const ProjectCard = ({ project }) => {
  return (
    <Box sx={{ m: 1 }}>
      <Card sx={{}}>
        <Box sx={{ minWidth: 300 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {project.name}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Status:
              </Typography>
              <Typography variant="body2">{project.status}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Link href={`/projects/${project.id}`} underline="none">
              <Button size="small">View</Button>
            </Link>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default ProjectCard;
