import gql from "graphql-tag";

/* eslint-disable graphql/template-strings */
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
/* eslint-enable graphql/template-strings */

export default typeDefs;
