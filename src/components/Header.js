import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Link
} from "@material-ui/core";
import RouterLink from "./RouterLink";
import AppDrawer from "./AppDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { TOGGLE_DRAWER } from "app-graphql";
import logo from "assets/images/logo.png";
import { makeStyles } from "@material-ui/styles";
import { useMutation } from "@apollo/react-hooks";

const useStyles = makeStyles(theme => ({
  logoLink: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: 60
    }
  }
}));

const Header = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [toggleDrawer] = useMutation(TOGGLE_DRAWER, {
    variables: { showDrawer: true }
  });

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
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppDrawer />
    </>
  );
});

export default Header;
