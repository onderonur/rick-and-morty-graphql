import { AppProps } from 'next/app';
import theme from '@/theming/theme';
import AppLayout from '@/layout/AppLayout';
import AppSeo from '@/seo/AppSeo';
import PageProgressBar from '@/common/PageProgressBar';
import createEmotionCache from '@/theming/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { useApollo } from '@/apollo/apollo';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  apollo: ApolloClient<unknown>;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <AppSeo />
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <PageProgressBar />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default MyApp;
