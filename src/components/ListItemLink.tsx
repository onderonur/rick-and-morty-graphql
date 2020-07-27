import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemTextProps,
  ListItemProps,
} from "@material-ui/core";
import NextLink, { NextLinkProps } from "./NextLink";

interface BaseListItemProps {
  href: NextLinkProps["href"];
  as?: NextLinkProps["as"];
  primaryText: ListItemTextProps["primary"];
  secondaryText?: ListItemTextProps["secondary"];
  selected?: ListItemProps["selected"];
  divider?: ListItemProps["divider"];
}

function BaseListItem({
  href,
  as,
  primaryText,
  secondaryText,
  selected,
  divider,
}: BaseListItemProps) {
  return (
    <ListItem
      button
      href={href}
      as={as}
      selected={selected}
      divider={divider}
      component={NextLink}
    >
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
}

export default BaseListItem;
