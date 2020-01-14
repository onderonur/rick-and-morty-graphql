import React, { useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Link,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "assets/images/logo.png";
import RouterLink from "../shared/components/RouterLink";
import { useToggleDrawerMutation } from "generated/graphql";

const useStyles = makeStyles(theme => ({
  logoLink: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: 60
    }
  }
}));

const AppHeader = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [toggleDrawer] = useToggleDrawerMutation({
    variables: { showDrawer: true }
  });

  const handleClick = useCallback(() => {
    toggleDrawer();
  }, [toggleDrawer]);

  return (
    <>
      <AppBar ref={ref} position="fixed" color="default">
        <Toolbar>
          <Link className={classes.logoLink} to="/" component={RouterLink}>
            <img src={logo} alt="Rick and Morty" />
            <Typography variant="h5" color="textPrimary">
              RICKQL
            </Typography>
          </Link>
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
