import gql from "graphql-tag";

const CHARACTER_FRAGMENT = gql`
  fragment Character on Character {
    id
    name
    image
    status
    species
    gender
    episode {
      id
      name
      air_date
      episode
    }
    origin {
      id
      name
    }
    location {
      id
      name
    }
  }
`;

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        ...Character
      }
      info {
        next
      }
    }
  }
  ${CHARACTER_FRAGMENT}
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID) {
    character(id: $id) {
      ...Character
    }
  }
  ${CHARACTER_FRAGMENT}
`;
