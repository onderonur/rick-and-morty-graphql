// OK
import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden"
  }
}));

const AspectRatio = React.forwardRef(({ aspectRatio, children }, ref) => {
  const classes = useStyles();

  const [ratioX, ratioY] = aspectRatio.split(":");
  const paddingTop = `${(100 * ratioY) / ratioX}%`;

  return (
    <Box
      ref={ref}
      className={classes.root}
      position="relative"
      height={0}
      paddingTop={paddingTop}
    >
      {children}
    </Box>
  );
});

export default AspectRatio;
