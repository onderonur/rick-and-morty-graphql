import React from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import HideOnScroll from "./components/HideOnScroll";
import AppHeader from "./components/AppHeader";
import Routes from "./Routes";
import BackToTopButton from "./components/BackToTopButton";
import AppDrawer from "components/AppDrawer";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  main: {
    padding: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppHeader />
      </HideOnScroll>
      <div className={classes.toolbar} />
      <Container className={classes.main} component="main" maxWidth="lg">
        <Routes />
      </Container>
      <AppDrawer />
      <BackToTopButton />
    </>
  );
}

export default App;
