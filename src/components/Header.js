// OK
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240
  }
}));

function Header() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleOpenDrawer() {
    setOpenDrawer(true);
  }

  function handleCloseDrawer() {
    setOpenDrawer(false);
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Button to="/" component={RouterLink} color="inherit">
            <Typography variant="h6">RickQL</Typography>
          </Button>
          <Box flexGrow={1} />
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={openDrawer}
        anchor="right"
        onClose={handleCloseDrawer}
      />
    </>
  );
}

export default Header;
