import React from "react";
import Link, { LinkProps } from "next/link";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  anchor: {
    textDecoration: "none",
  },
}));

export type NextLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextLink: React.ForwardRefRenderFunction<any, NextLinkProps> = (
  {
    children,
    href,
    as,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    // To pass the any other props like "className" etc to anchor.
    className,
    ...rest
  },
  ref,
) => {
  const classes = useStyles();
  return (
    <Link
      ref={ref}
      // If any other prop is passed to next/link,
      // it gives a propType warning.
      {...{ href, as, passHref, prefetch, replace, scroll, shallow }}
    >
      <a className={clsx(classes.anchor, className)} {...rest}>
        {children}
      </a>
    </Link>
  );
};

export default React.forwardRef(NextLink);
