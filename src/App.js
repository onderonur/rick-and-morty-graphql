// OK
import React from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Routes from "./Routes";
import BackToTopButton from "components/BackToTopButton";

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
      <Header />
      <div className={classes.toolbar} />
      <Container className={classes.main} component="main" maxWidth="lg">
        <BackToTopButton />
        <Routes />
      </Container>
    </>
  );
}

export default App;
