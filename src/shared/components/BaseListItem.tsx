import React from "react";
import { ListItem, ListItemText, ListItemTextProps } from "@material-ui/core";
import RouterLink, { RouterLinkProps } from "./RouterLink";

interface BaseListItemProps {
  to: RouterLinkProps["to"];
  primaryText: ListItemTextProps["primary"];
  secondaryText: ListItemTextProps["secondary"];
}

function BaseListItem({ to, primaryText, secondaryText }: BaseListItemProps) {
  return (
    <ListItem button divider to={to} component={RouterLink}>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
}

export default BaseListItem;
