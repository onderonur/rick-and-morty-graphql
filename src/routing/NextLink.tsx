import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import clsx from 'clsx';
import { Omit } from '@/common/CommonTypes';

export type NextLinkProps = React.PropsWithChildren<
  Omit<LinkProps, 'passHref'>
> &
  Pick<MuiLinkProps, 'className' | 'underline' | 'color'>;

const NextLink = React.forwardRef<
  React.ComponentRef<typeof MuiLink>,
  NextLinkProps
>(function NextLink(
  {
    children,
    href,
    prefetch,
    replace,
    scroll,
    shallow,
    underline = 'none',
    color = 'inherit',
    // To pass the any other props like "className" etc to anchor.
    className,
    ...rest
  },
  ref,
) {
  return (
    <Link
      // If any other prop is passed to next/link,
      // it gives a propType warning.
      {...{ href, prefetch, replace, scroll, shallow }}
      // If the child of Link is a custom component that wraps an <a> tag, you must add passHref to Link.
      // https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
      passHref={true}
    >
      <MuiLink
        ref={ref}
        sx={{ textDecoration: 'none' }}
        className={clsx(
          // Material UI passes classes sometimes.
          // So, we need "className" prop here.
          className,
        )}
        underline={underline}
        color={color}
        {...rest}
      >
        {children}
      </MuiLink>
    </Link>
  );
});

export default NextLink;
