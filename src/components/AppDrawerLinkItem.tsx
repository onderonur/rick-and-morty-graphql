import React from "react";
import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import RouterLink, { RouterLinkProps } from "../shared/components/RouterLink";

const useStyles = makeStyles(theme => ({
  emoji: {
    marginRight: theme.spacing(2)
  }
}));

interface AppDrawerLinkItemProps {
  to: RouterLinkProps["to"];
  ariaLabel: React.AriaAttributes["aria-label"];
  emoji: string;
  title: string;
}

function AppDrawerLinkItem({
  to,
  ariaLabel,
  emoji,
  title
}: AppDrawerLinkItemProps) {
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
