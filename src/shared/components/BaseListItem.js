import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import RouterLink from "./RouterLink";

function BaseListItem({ to, primaryText, secondaryText }) {
  return (
    <ListItem button divider to={to} component={RouterLink}>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
}

export default BaseListItem;
