import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useLocation } from "react-router-dom";
import RouterLink from "../shared/components/RouterLink";

const useStyles = makeStyles(theme => ({
  emoji: {
    marginRight: theme.spacing(2)
  }
}));

function AppDrawerLinkItem({ to, ariaLabel, emoji, title }) {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <ListItem button to={to} component={RouterLink} selected={pathname === to}>
      <ListItemText>
        <span className={classes.emoji} role="img" aria-label={ariaLabel}>
          {emoji}
        </span>
        {title}
      </ListItemText>
    </ListItem>
  );
}

export default AppDrawerLinkItem;
