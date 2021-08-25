import gql from 'graphql-tag';

const PAGE_INFO_FRAGMENT = gql`
  fragment pageInfo on Info {
    next
  }
`;

export default PAGE_INFO_FRAGMENT;
