import gql from 'graphql-tag';

/* eslint-disable graphql/template-strings */
const typeDefs = gql`
  extend type Query {
    showDrawer: Boolean!
  }
`;
/* eslint-enable graphql/template-strings */

export default typeDefs;
