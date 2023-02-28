import React from 'react';
import {
  ListItemText,
  ListItemTextProps,
  ListItemButton,
  ListItemButtonProps,
  ListItem,
} from '@mui/material';
import NextLink, { NextLinkProps } from '@/routing/NextLink';

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
    <ListItem disablePadding>
      <ListItemButton
        href={href}
        selected={selected}
        divider={divider}
        component={NextLink}
      >
        <ListItemText primary={primary} secondary={secondary} />
      </ListItemButton>
    </ListItem>
  );
}

export default ListItemLink;
