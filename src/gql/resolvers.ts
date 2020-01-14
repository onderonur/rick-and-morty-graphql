import { Resolvers } from "generated/graphql";
import { ApolloClient } from "apollo-boost";

type CacheShape = any;

const resolvers: Resolvers<{ client: ApolloClient<CacheShape> }> = {
  Mutation: {
    toggleDrawer: (obj, { showDrawer }, { client }) => {
      client.writeData({
        data: {
          showDrawer
        }
      });
      return showDrawer;
    }
  }
};

export default resolvers;
