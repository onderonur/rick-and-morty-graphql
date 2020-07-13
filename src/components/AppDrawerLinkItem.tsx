import React from "react";
import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import NextLink, { NextLinkProps } from "@/components/NextLink";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  emoji: {
    marginRight: theme.spacing(2),
  },
}));

interface AppDrawerLinkItemProps {
  href: NextLinkProps["href"];
  ariaLabel: React.AriaAttributes["aria-label"];
  emoji: string;
  title: string;
}

function AppDrawerLinkItem({
  href,
  ariaLabel,
  emoji,
  title,
}: AppDrawerLinkItemProps) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <ListItem
      button
      href={href}
      component={NextLink}
      selected={router.pathname === href}
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

export default AppDrawerLinkItem;
