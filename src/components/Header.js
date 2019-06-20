// OK
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
import { Mutation } from "react-apollo";
import { TOGGLE_DRAWER } from "app-graphql";
import logo from "assets/images/logo.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => {
  return {
    logoLink: {
      display: "flex",
      alignItems: "center",
      "&:hover": {
        textDecoration: "none"
      },
      "& img": {
        width: 60
      }
    }
  };
});

function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Link className={classes.logoLink} to="/" component={RouterLink}>
            <img src={logo} alt="Rick and Morty" />
            <Typography variant="h5" color="textPrimary">
              RICKQL
            </Typography>
          </Link>
          <Box flexGrow={1} />
          <Mutation mutation={TOGGLE_DRAWER} variables={{ showDrawer: true }}>
            {toggleDrawer => {
              return (
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              );
            }}
          </Mutation>
        </Toolbar>
      </AppBar>
      {/* TODO: Close on location change */}
      <AppDrawer />
    </>
  );
}

export default Header;
