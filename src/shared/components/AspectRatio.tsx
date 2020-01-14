import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export const getAspectRatioString = (width: number, height: number) =>
  `${width}:${height}`;

interface StyleProps {
  paddingTop: CSSProperties["paddingTop"];
}

const useStyles = makeStyles<Theme, StyleProps>(theme => ({
  root: {
    overflow: "hidden",
    position: "relative",
    height: ({ paddingTop }) => (paddingTop ? 0 : undefined),
    paddingTop: ({ paddingTop }) => paddingTop
  }
}));

type AspectRatioProps = React.PropsWithChildren<{
  aspectRatio: string;
}>;

const AspectRatio: React.RefForwardingComponent<
  HTMLDivElement,
  AspectRatioProps
> = ({ aspectRatio, children }, ref) => {
  const [ratioX, ratioY] = aspectRatio.split(":").map(ratio => parseInt(ratio));
  const ratio = (100 * ratioY) / ratioX;
  const paddingTop = isNaN(ratio) ? undefined : `${ratio}%`;

  const classes = useStyles({ paddingTop });

  return (
    <div ref={ref} className={classes.root}>
      {children}
    </div>
  );
};

export default React.forwardRef(AspectRatio);
