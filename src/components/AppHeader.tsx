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
import NextLink from "@/shared/components/NextLink";
import { useToggleDrawerMutation } from "@/generated/graphql";

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
  const [toggleDrawer] = useToggleDrawerMutation({
    variables: { showDrawer: true },
  });

  const handleClick = useCallback(() => {
    toggleDrawer();
  }, [toggleDrawer]);

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
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
});

export default AppHeader;
