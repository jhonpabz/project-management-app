import React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: 15,
        }}
      >
        <PriorityHighIcon style={{ fontSize: 50 }} />
        <Typography variant="h1" component="div" gutterBottom>
          404
        </Typography>
        <Typography variant="body2" gutterBottom>
          Sorry, this page does not exist.
        </Typography>
        <Link href={`/`} underline="none">
          <Button>Go Back</Button>
        </Link>
      </Box>
    </>
  );
};

export default NotFound;
