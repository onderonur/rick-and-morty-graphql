import React from "react";
import App from "next/app";
import Head from "next/head";
import {
  ThemeProvider,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@/theme";
import { getDocumentTitle } from "@/shared/utils";
import HideOnScroll from "@/components/HideOnScroll";
import AppHeader from "@/components/AppHeader";
import { Container } from "@material-ui/core";
import withApollo from "@/shared/lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import AppDrawer from "@/components/AppDrawer";
import BackToTopButton from "@/components/BackToTopButton";

const styles = (theme: Theme) => ({
  toolbar: { ...theme.mixins.toolbar },
  main: {
    padding: theme.spacing(2),
  },
});

type MyAppProps = WithStyles<typeof styles>;

// Example for material-ui with next-js:
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
class MyApp extends App<MyAppProps> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, classes } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getDocumentTitle()}</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <HideOnScroll>
            <AppHeader />
          </HideOnScroll>
          <div className={classes.toolbar} />
          <AppDrawer />
          <BackToTopButton />
          <Container className={classes.main} maxWidth="lg" component="main">
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withApollo(MyApp, { getDataFromTree }));
