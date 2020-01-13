import gql from "graphql-tag";

export const TOGGLE_DRAWER = gql`
  mutation toggleDrawer($showDrawer: Boolean!) {
    toggleDrawer(showDrawer: $showDrawer) @client
  }
`;
