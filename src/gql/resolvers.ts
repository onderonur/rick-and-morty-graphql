import { Resolvers } from "generated/graphql";
import { ApolloClient } from "apollo-boost";

const resolvers: Resolvers<{ client: ApolloClient<any> }> = {
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
