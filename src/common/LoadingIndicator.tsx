import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';

type LoadingIndicatorProps = React.PropsWithChildren<{
  loading: boolean | undefined;
}>;

const LoadingIndicator = React.forwardRef<
  HTMLDivElement,
  LoadingIndicatorProps
>(function LoadingIndicator({ loading, children }, ref) {
  if (!loading) {
    return <>{children}</> || null;
  }

  return (
    <Box
      // Box component doesn't have the typing for "ref"
      // but it works.
      // So, we use this little hack to solve this typing issue.
      // https://github.com/mui-org/material-ui/issues/17010#issuecomment-615577360
      {...{ ref }}
      display="flex"
      justifyContent="center"
      my={2}
      flexGrow={1}
    >
      <CircularProgress size={48} color="secondary" />
    </Box>
  );
});

export default LoadingIndicator;
