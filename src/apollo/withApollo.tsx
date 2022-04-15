import withApollo from 'next-with-apollo';
import { ApolloClient } from '@apollo/client';
import cache from '@/apollo/cache';
import typeDefs from '@/apollo/typeDefs';
import { IS_SERVER } from '@/common/CommonUtils';

export default withApollo(({ initialState = {} }) => {
  cache.restore(initialState);
  const client = new ApolloClient({
    uri: IS_SERVER
      ? // We directly call the rick and morty api on the server side.
        `${process.env.API_URL}/graphql`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
    typeDefs,
    cache,
    ssrMode: IS_SERVER,
  });
  return client;
});
