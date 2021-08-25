import React from 'react';
import withApollo from 'next-with-apollo';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import cache from '@/apollo/cache';
import typeDefs from '@/apollo/typeDefs';
import { IS_SERVER } from '@/common/CommonUtils';

export default withApollo(
  ({ initialState = {} }) => {
    cache.restore(initialState);
    const client = new ApolloClient({
      uri: IS_SERVER
        ? // We directly call the rick and morty api on the server side.
          `${process.env.NEXT_PUBLIC_API_URL}/graphql`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
      typeDefs,
      cache,
    });
    return client;
  },
  {
    render: function ApolloWrapper({ Page, props }) {
      const { apollo } = props;
      return (
        <ApolloProvider client={apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  },
);
