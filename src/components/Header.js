import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/" component={RouterLink} color="inherit">
          <Typography variant="h6">Rick and Morty</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
