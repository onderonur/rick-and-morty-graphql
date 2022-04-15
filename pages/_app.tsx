import React from 'react';
import { AppProps } from 'next/app';
import theme from '@/theming/theme';
import { getDataFromTree } from '@apollo/client/react/ssr';
import AppLayout from '@/layout/AppLayout';
import AppSeo from '@/seo/AppSeo';
import PageProgressBar from '@/common/PageProgressBar';
import createEmotionCache from '@/theming/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import withApollo from '@/apollo/withApollo';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  apollo: ApolloClient<unknown>;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  apollo,
  pageProps,
}: MyAppProps) {
  return (
    <ApolloProvider client={apollo}>
      <CacheProvider value={emotionCache}>
        <AppSeo />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PageProgressBar />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default withApollo(MyApp, { getDataFromTree });
