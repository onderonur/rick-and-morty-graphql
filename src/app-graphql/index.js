import gql from "graphql-tag";

const PAGE_INFO_FRAGMENT = gql`
  fragment pageInfo on Info {
    next
  }
`;

const LOCATION_FRAGMENT = gql`
  fragment location on Location {
    id
    name
    type
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
`;

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        ...character
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
  ${CHARACTER_FRAGMENT}
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
  ${EPISODE_FRAGMENT}
`;

export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
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
  query getEpisode($id: ID) {
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

export const GET_LOCATIONS = gql`
  query getLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        ...location
      }
      info {
        ...pageInfo
      }
    }
  }
  ${LOCATION_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
`;

export const GET_LOCATION = gql`
  query getLocation($id: ID) {
    location(id: $id) {
      ...location
      dimension
      residents {
        ...character
      }
    }
  }
  ${LOCATION_FRAGMENT}
  ${CHARACTER_FRAGMENT}
`;

export const GET_SHOW_DRAWER = gql`
  query getShowDrawer {
    showDrawer @client
  }
`;

export const TOGGLE_DRAWER = gql`
  mutation toggleDrawer($showDrawer: Boolean!) {
    toggleDrawer(showDrawer: $showDrawer) @client
  }
`;
