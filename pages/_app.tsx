import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@/modules/theming/theme";
import withApollo from "@/modules/apollo/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import Head from "next/head";
import NProgress from "nprogress";
import { Router } from "next/router";
import AppLayout from "@/modules/layout/AppLayout";
import AppSeo from "@/modules/seo/AppSeo";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// Example for material-ui with next-js:
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <AppSeo />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withApollo(MyApp, { getDataFromTree });
