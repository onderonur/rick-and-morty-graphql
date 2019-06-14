// OK
import React from "react";
import { CircularProgress, Box } from "@material-ui/core";

function LoadingIndicator() {
  return (
    <Box display="flex" justifyContent="center" my={2}>
      <CircularProgress size={48} color="secondary" />
    </Box>
  );
}

export default LoadingIndicator;
