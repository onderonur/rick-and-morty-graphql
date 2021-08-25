import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemTextProps,
  ListItemProps,
} from '@material-ui/core';
import NextLink, { NextLinkProps } from '../routing/NextLink';

type ListItemLinkProps = Pick<NextLinkProps, 'href'> &
  Pick<ListItemTextProps, 'primary' | 'secondary'> &
  Pick<ListItemProps, 'selected' | 'divider'>;

function ListItemLink({
  href,
  primary,
  secondary,
  selected,
  divider,
}: ListItemLinkProps) {
  return (
    <ListItem
      button
      href={href}
      selected={selected}
      divider={divider}
      component={NextLink}
    >
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
}

export default ListItemLink;
