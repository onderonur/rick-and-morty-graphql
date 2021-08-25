import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/theming/theme';
import withApollo from '@/apollo/withApollo';
import { getDataFromTree } from '@apollo/client/react/ssr';
import AppLayout from '@/layout/AppLayout';
import AppSeo from '@/seo/AppSeo';
import PageProgressBar from '@/common/PageProgressBar';

// Example for material-ui with next-js:
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <AppSeo />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PageProgressBar />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withApollo(MyApp, { getDataFromTree });
