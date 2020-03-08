import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  link: {
    "&:hover": {
      textDecoration: "inherit",
    },
  },
}));

type ForwardedRef =
  | string
  | ((instance: Link<any> | null) => void)
  | React.RefObject<Link<any>>
  | null
  | undefined;

export type RouterLinkProps = LinkProps;

const RouterLink = React.forwardRef(
  ({ className, ...props }: RouterLinkProps, ref: ForwardedRef) => {
    const classes = useStyles();

    return (
      <Link {...props} ref={ref} className={clsx(classes.link, className)} />
    );
  },
);

export default RouterLink;
