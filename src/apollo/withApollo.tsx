import React from "react";
import withApollo from "next-with-apollo";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import cache from "@/apollo/cache";
import typeDefs from "@/apollo/typeDefs";

export default withApollo(
  ({ initialState = {} }) => {
    cache.restore(initialState);
    const client = new ApolloClient({
      uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
      typeDefs,
      cache,
    });
    return client;
  },
  {
    render: ({ Page, props }) => {
      const { apollo } = props;
      return (
        <ApolloProvider client={apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  },
);
