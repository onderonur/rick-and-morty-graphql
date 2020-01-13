const resolvers = {
  Mutation: {
    toggleDrawer: (obj, { showDrawer }, { client }) => {
      client.writeData({
        data: {
          showDrawer
        }
      });
    }
  }
};

export default resolvers;
