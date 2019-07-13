import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RouterLink from './RouterLink';

const useStyles = makeStyles(theme => ({
  emoji: {
    marginRight: theme.spacing(2)
  }
}));

function AppDrawerLinkItem({ to, ariaLabel, emoji, title }) {
  const classes = useStyles();

  return (
    <ListItem button to={to} component={RouterLink}>
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
