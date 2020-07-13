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
import withApollo from "@/lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import AppDrawer from "@/components/AppDrawer";
import BackToTopButton from "@/components/BackToTopButton";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import Head from "next/head";
import NProgress from "nprogress";
import { Router, withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import { appTitle } from "@/constants";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// https://nextjs.org/docs/api-reference/next.config.js/environment-variables
// Trying to destructure process.env variables won't work due to the nature of webpack DefinePlugin.
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getDefaultSeoConfig = (pathname: string): DefaultSeoProps => {
  const url = `${NEXT_PUBLIC_BASE_URL}${pathname}`;
  const description = `${appTitle} is a client application for Rick and Morty GraphQL API. It's created with Next.js, Apollo-Client and TypeScript.`;
  return {
    titleTemplate: `%s | ${appTitle}`,
    description,
    canonical: url,
    openGraph: {
      title: "Rick and Morty GraphQL Application",
      description,
      type: "website",
      locale: "en_IE",
      url,
      site_name: appTitle,
      images: [
        {
          width: 600,
          height: 600,
          url: `${NEXT_PUBLIC_BASE_URL}/images/logo.png`,
          alt: `${appTitle} Log`,
        },
        {
          width: 600,
          height: 334,
          url: `${NEXT_PUBLIC_BASE_URL}/images/locations.jpg`,
          alt: "Rick and Morty Locations",
        },
        {
          width: 600,
          height: 337,
          url: `${NEXT_PUBLIC_BASE_URL}/images/episodes.jpg`,
          alt: "Rick and Morty Episodes",
        },
        {
          width: 600,
          height: 341,
          url: `${NEXT_PUBLIC_BASE_URL}/images/characters.jpg`,
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
        content: appTitle,
      },
    ],
  };
};

const styles = (theme: Theme) => ({
  toolbar: { ...theme.mixins.toolbar },
  main: {
    padding: theme.spacing(2),
  },
});

type MyAppProps = WithStyles<typeof styles> & WithRouterProps;

// Example for material-ui with next-js:
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
class MyApp extends App<MyAppProps> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps, classes, router } = this.props;

    return (
      <React.Fragment>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <DefaultSeo {...getDefaultSeoConfig(router.pathname)} />
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

export default withStyles(styles)(
  withApollo(withRouter(MyApp), { getDataFromTree }),
);
