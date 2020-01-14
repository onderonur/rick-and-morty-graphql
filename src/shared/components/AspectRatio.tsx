import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden"
  }
}));

type AspectRatioProps = React.PropsWithChildren<{
  aspectRatio: string;
}>;

const AspectRatio: React.RefForwardingComponent<any, AspectRatioProps> = (
  { aspectRatio, children },
  ref
) => {
  const classes = useStyles();

  const [ratioX, ratioY] = aspectRatio.split(":").map(ratio => parseInt(ratio));
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
};

export default React.forwardRef(AspectRatio);
