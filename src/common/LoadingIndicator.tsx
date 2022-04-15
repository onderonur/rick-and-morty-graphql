import React from 'react';
import { CircularProgress, Box } from '@mui/material';

type LoadingIndicatorProps = React.PropsWithChildren<{
  loading: boolean | undefined;
}>;

const LoadingIndicator = React.forwardRef<
  React.ComponentRef<typeof Box>,
  LoadingIndicatorProps
>(function LoadingIndicator({ loading, children }, ref) {
  if (!loading) {
    return <>{children}</> || null;
  }

  return (
    <Box ref={ref} display="flex" justifyContent="center" my={2} flexGrow={1}>
      <CircularProgress size={48} color="secondary" />
    </Box>
  );
});

export default LoadingIndicator;
