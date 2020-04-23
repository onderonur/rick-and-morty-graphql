import React from "react";
import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache, Resolvers } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import resolvers from "@/gql/resolvers";
import typeDefs from "@/gql/typeDefs";

export default withApollo(
  ({ initialState = {} }) => {
    const cache = new InMemoryCache().restore(initialState);
    const client = new ApolloClient({
      uri: `${process.env.BASE_URL}/api/graphql`,
      cache,
      clientState: {
        resolvers: resolvers as Resolvers,
        typeDefs,
      },
    });
    // Initial state (for local state management)
    client.writeData({ data: { showDrawer: false } });
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
