import React, { useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import NextLink from "@/common/NextLink";
import { showDrawerVar } from "@/apollo/cache";

const useStyles = makeStyles((theme) => ({
  logoLink: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: 60,
    },
  },
}));

const AppHeader = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const handleClick = useCallback(() => {
    showDrawerVar(true);
  }, []);

  return (
    <>
      <AppBar ref={ref} position="fixed" color="default">
        <Toolbar>
          <NextLink className={classes.logoLink} href="/">
            <img src="/images/logo.png" alt="Rick and Morty" />
            <Typography variant="h5" color="textPrimary">
              RICKQL
            </Typography>
          </NextLink>
          <Box flexGrow={1} />
          <IconButton
            href="https://github.com/onderonur/rick-and-morty-graphql"
            target="__blank"
            // https://developers.google.com/web/tools/lighthouse/audits/noopener
            // rel="noopener" prevents the new page from being able to access the window.opener
            // property and ensures it runs in a separate process.
            // rel="noreferrer" attribute has the same effect, but also prevents the Referer header
            // from being sent to the new page.
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
});

export default AppHeader;
