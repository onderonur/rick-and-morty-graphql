import React from "react";
import App from "next/app";
import {
  ThemeProvider,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@/theme";
import HideOnScroll from "@/components/HideOnScroll";
import AppHeader from "@/components/AppHeader";
import { Container } from "@material-ui/core";
import withApollo from "@/shared/lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import AppDrawer from "@/components/AppDrawer";
import BackToTopButton from "@/components/BackToTopButton";
import { DefaultSeo, DefaultSeoProps } from "next-seo";

const { BASE_URL } = process.env;

const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: "%s | RickQL",
  description:
    "RickQL is a client application for Rick and Morty GraphQL API. It's created with Next.js, Apollo-Client and TypeScript.",
  canonical: BASE_URL,
  openGraph: {
    title: "Rick and Morty GraphQL Application",
    type: "website",
    locale: "en_IE",
    url: BASE_URL,
    site_name: "RickQL",
    images: [
      {
        width: 728,
        height: 413,
        url: `${BASE_URL}/images/characters.png`,
        alt: "Rick and Morty Characters",
      },
      {
        width: 728,
        height: 409,
        url: `${BASE_URL}/images/episodes.jpg`,
        alt: "Rick and Morty Episodes",
      },
      {
        width: 728,
        height: 405,
        url: `${BASE_URL}/images/locations.jpg`,
        alt: "Rick and Morty Locations",
      },
    ],
  },
};

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
    jssStyles?.parentElement?.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps, classes } = this.props;

    return (
      <React.Fragment>
        <DefaultSeo {...DEFAULT_SEO_CONFIG} />
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
