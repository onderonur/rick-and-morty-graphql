// OK
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  Button
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/" component={RouterLink} color="inherit">
          <Typography variant="h6">Rick and Morty</Typography>
        </Link>
        <Box flexGrow={1} />
        <Button color="inherit" to="/characters" component={RouterLink}>
          Characters
        </Button>
        <Button color="inherit" to="/episodes" component={RouterLink}>
          Episodes
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
