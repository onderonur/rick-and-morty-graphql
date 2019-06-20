import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    showDrawer: Boolean!
  }

  extend type Mutation {
    toggleDrawer(showDrawer: Boolean!): Boolean!
  }
`;

export default typeDefs;
