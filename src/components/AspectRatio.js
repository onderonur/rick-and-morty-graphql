// OK
import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden"
  }
}));

function AspectRatio({ aspectRatio, children }) {
  const classes = useStyles();

  const [ratioX, ratioY] = aspectRatio.split(":");
  const paddingTop = `${(100 * ratioY) / ratioX}%`;

  return (
    <Box
      className={classes.root}
      position="relative"
      height={0}
      paddingTop={paddingTop}
    >
      {children}
    </Box>
  );
}

export default AspectRatio;
