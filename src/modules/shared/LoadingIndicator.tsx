import React from "react";
import { CircularProgress, Box } from "@material-ui/core";

type LoadingIndicatorProps = React.PropsWithChildren<{
  loading: boolean | undefined;
}>;

function LoadingIndicator({ loading, children }: LoadingIndicatorProps) {
  return loading ? (
    <Box display="flex" justifyContent="center" my={2} flexGrow={1}>
      <CircularProgress size={48} color="secondary" />
    </Box>
  ) : (
    <>{children}</> || null
  );
}

export default LoadingIndicator;
