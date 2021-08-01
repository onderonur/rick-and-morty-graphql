import React from "react";
import { makeStyles } from "@material-ui/core";
import { NextLinkProps } from "@/common/NextLink";
import { useRouter } from "next/router";
import ListItemLink from "@/common/ListItemLink";

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
    <ListItemLink
      primary={
        <>
          <span className={classes.emoji} role="img" aria-label={ariaLabel}>
            {emoji}
          </span>
          {title}
        </>
      }
      href={href}
      selected={router.pathname === href}
    />
  );
}

export default AppDrawerLinkItem;
