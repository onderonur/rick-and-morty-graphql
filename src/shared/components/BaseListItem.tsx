import React from "react";
import { ListItem, ListItemText, ListItemTextProps } from "@material-ui/core";
import NextLink, { NextLinkProps } from "./NextLink";

interface BaseListItemProps {
  href: NextLinkProps["href"];
  as: NextLinkProps["as"];
  primaryText: ListItemTextProps["primary"];
  secondaryText: ListItemTextProps["secondary"];
}

function BaseListItem({
  href,
  as,
  primaryText,
  secondaryText,
}: BaseListItemProps) {
  return (
    <ListItem button divider href={href} as={as} component={NextLink}>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
}

export default BaseListItem;
