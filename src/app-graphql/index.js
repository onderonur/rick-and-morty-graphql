import gql from "graphql-tag";

const PAGE_INFO_FRAGMENT = gql`
  fragment pageInfo on Info {
    next
  }
`;

const EPISODE_FRAGMENT = gql`
  fragment episode on Episode {
    id
    name
    air_date
    episode
  }
`;

const CHARACTER_FRAGMENT = gql`
  fragment character on Character {
    id
    name
    image
  }
  ${EPISODE_FRAGMENT}
`;

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
        episode {
          id
          air_date
        }
      }
      info {
        ...pageInfo
      }
    }
  }
  ${PAGE_INFO_FRAGMENT}
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID) {
    character(id: $id) {
      ...character
      status
      species
      gender
      episode {
        ...episode
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
  }
  ${CHARACTER_FRAGMENT}
`;

export const GET_EPISODES = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        ...episode
      }
      info {
        ...pageInfo
      }
    }
  }
  ${EPISODE_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
`;

export const GET_EPISODE = gql`
  query episode($id: ID) {
    episode(id: $id) {
      ...episode
      characters {
        ...character
      }
    }
  }
  ${EPISODE_FRAGMENT}
  ${CHARACTER_FRAGMENT}
`;