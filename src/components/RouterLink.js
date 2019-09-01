import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  link: {
    "&:hover": {
      textDecoration: "inherit"
    }
  }
}));

const RouterLink = React.forwardRef(({ className, ...props }, ref) => {
  const classes = useStyles();

  return (
    <Link {...props} ref={ref} className={clsx(classes.link, className)} />
  );
});

export default RouterLink;
