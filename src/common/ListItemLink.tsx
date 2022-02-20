import React from 'react';
import {
  ListItemText,
  ListItemTextProps,
  ListItemButton,
  ListItemButtonProps,
} from '@mui/material';
import NextLink, { NextLinkProps } from '../routing/NextLink';

type ListItemLinkProps = Pick<NextLinkProps, 'href'> &
  Pick<ListItemTextProps, 'primary' | 'secondary'> &
  Pick<ListItemButtonProps, 'selected' | 'divider'>;

function ListItemLink({
  href,
  primary,
  secondary,
  selected,
  divider,
}: ListItemLinkProps) {
  return (
    <ListItemButton
      href={href}
      selected={selected}
      divider={divider}
      component={NextLink}
    >
      <ListItemText primary={primary} secondary={secondary} />
    </ListItemButton>
  );
}

export default ListItemLink;
