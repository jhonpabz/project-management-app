import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box sx={{ marginTop: "150px" }}>
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default LoadingSpinner;
