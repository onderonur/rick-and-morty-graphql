import React from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./Header";
import Routes from "./Routes";
import BackToTopButton from "./BackToTopButton";
import HideOnScroll from "./HideOnScroll";

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
        <Header />
      </HideOnScroll>
      <div className={classes.toolbar} />
      <Container className={classes.main} component="main" maxWidth="lg">
        <Routes />
      </Container>
      <BackToTopButton />
    </>
  );
}

export default App;
