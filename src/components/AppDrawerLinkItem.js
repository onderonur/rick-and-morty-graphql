import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RouterLink from './RouterLink';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  emoji: {
    marginRight: theme.spacing(2)
  }
}));

function AppDrawerLinkItem({ to, ariaLabel, emoji, title, location }) {
  const classes = useStyles();

  return (
    <ListItem
      button
      to={to}
      component={RouterLink}
      selected={location.pathname === to}
    >
      <ListItemText>
        <span className={classes.emoji} role="img" aria-label={ariaLabel}>
          {emoji}
        </span>
        {title}
      </ListItemText>
    </ListItem>
  );
}

export default withRouter(AppDrawerLinkItem);
