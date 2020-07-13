import gql from "graphql-tag";

/* eslint-disable graphql/template-strings */
export const TOGGLE_DRAWER = gql`
  mutation toggleDrawer($showDrawer: Boolean!) {
    toggleDrawer(showDrawer: $showDrawer) @client
  }
`;
/* eslint-disable graphql/template-strings */
