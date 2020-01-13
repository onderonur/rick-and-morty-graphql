import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    showDrawer: Boolean!
  }

  # Rick and Morty API has no "mutation" schema.
  # So, we can not extend it.
  type Mutation {
    toggleDrawer(showDrawer: Boolean!): Boolean!
  }
`;

export default typeDefs;
