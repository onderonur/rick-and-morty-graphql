import React from "react";
import { CircularProgress, Box } from "@material-ui/core";

function LoadingIndicator({ loading, children }) {
  return loading ? (
    <Box display="flex" justifyContent="center" my={2} flexGrow={1}>
      <CircularProgress size={48} color="secondary" />
    </Box>
  ) : (
    children || null
  );
}

export default LoadingIndicator;
