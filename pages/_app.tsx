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
import Head from "next/head";
import NProgress from "nprogress";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// https://nextjs.org/docs/api-reference/next.config.js/environment-variables
// Trying to destructure process.env variables won't work due to the nature of webpack DefinePlugin.
const BASE_URL = process.env.BASE_URL;

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
        width: 600,
        height: 600,
        url: `${BASE_URL}/images/logo.png`,
        alt: "RickQL Logo",
      },
      {
        width: 750,
        height: 418,
        url: `${BASE_URL}/images/locations.jpg`,
        alt: "Rick and Morty Locations",
      },
      {
        width: 767,
        height: 431,
        url: `${BASE_URL}/images/episodes.jpg`,
        alt: "Rick and Morty Episodes",
      },
      {
        width: 1600,
        height: 908,
        url: `${BASE_URL}/images/characters.png`,
        alt: "Rick and Morty Characters",
      },
    ],
  },
  additionalMetaTags: [
    {
      property: "dc:creator",
      content: "Onur ÖNDER",
    },
    {
      name: "application-name",
      content: "RickQL",
    },
  ],
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
        <Head>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <DefaultSeo {...DEFAULT_SEO_CONFIG} />
        <ThemeProvider theme={theme}>
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
