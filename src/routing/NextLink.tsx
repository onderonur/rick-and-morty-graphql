import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { Omit } from '@/common/CommonTypes';

export type NextLinkProps = React.PropsWithChildren<
  Omit<LinkProps, 'passHref' | 'href'>
> &
  Pick<MuiLinkProps, 'href' | 'className' | 'underline' | 'color'>;

const NextLink = React.forwardRef<
  React.ComponentRef<typeof MuiLink>,
  NextLinkProps
>(function NextLink(
  {
    children,
    underline = 'none',
    color = 'inherit',
    // To pass the any other props like "className" etc to anchor.
    ...rest
  },
  ref,
) {
  return (
    <MuiLink
      ref={ref}
      underline={underline}
      color={color}
      component={Link}
      {...rest}
    >
      {children}
    </MuiLink>
  );
});

export default NextLink;
