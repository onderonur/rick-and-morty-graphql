import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  showDrawer: Scalars['Boolean'];
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type PageInfoFragment = { __typename?: 'Info', next?: number | null | undefined };

export type CharacterCard_CharacterFragment = { __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> };

export type CharacterCard_CharacterWithSpecsFragment = { __typename?: 'Character', status?: string | null | undefined, species?: string | null | undefined, gender?: string | null | undefined, id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, origin?: { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined } | null | undefined, location?: { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined } | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> };

export type CharacterGridList_CharacterFragment = { __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> };

export type CharacterGridListItem_CharacterFragment = { __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> };

export type CharacterProfile_CharacterFragment = { __typename?: 'Character', status?: string | null | undefined, species?: string | null | undefined, gender?: string | null | undefined, id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined, name?: string | null | undefined, episode?: string | null | undefined } | null | undefined>, origin?: { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined } | null | undefined, location?: { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined } | null | undefined };

export type EpisodeCard_EpisodeFragment = { __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, episode?: string | null | undefined, air_date?: string | null | undefined };

export type EpisodeList_EpisodeFragment = { __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined };

export type EpisodeListItem_EpisodeFragment = { __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined };

export type EpisodeProfile_EpisodeFragment = { __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, episode?: string | null | undefined, air_date?: string | null | undefined, characters: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> } | null | undefined> };

export type LocationListItem_LocationFragment = { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined };

export type LocationList_LocationFragment = { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined };

export type LocationCard_LocationFragment = { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined, dimension?: string | null | undefined };

export type LocationProfile_LocationFragment = { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined, dimension?: string | null | undefined, residents: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> } | null | undefined> };

export type GetShowDrawerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShowDrawerQuery = { __typename?: 'Query', showDrawer: boolean };

export type GetCharacterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', name?: string | null | undefined, image?: string | null | undefined, status?: string | null | undefined, species?: string | null | undefined, gender?: string | null | undefined, id?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined, name?: string | null | undefined, episode?: string | null | undefined } | null | undefined>, origin?: { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined } | null | undefined, location?: { __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined };

export type GetCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterCharacter>;
}>;


export type GetCharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> } | null | undefined> | null | undefined, info?: { __typename?: 'Info', next?: number | null | undefined } | null | undefined } | null | undefined };

export type GetEpisodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetEpisodeQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', name?: string | null | undefined, id?: string | null | undefined, episode?: string | null | undefined, air_date?: string | null | undefined, characters: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> } | null | undefined> } | null | undefined };

export type GetEpisodesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterEpisode>;
}>;


export type GetEpisodesQuery = { __typename?: 'Query', episodes?: { __typename?: 'Episodes', results?: Array<{ __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined } | null | undefined> | null | undefined, info?: { __typename?: 'Info', next?: number | null | undefined } | null | undefined } | null | undefined };

export type GetLocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLocationQuery = { __typename?: 'Query', location?: { __typename?: 'Location', name?: string | null | undefined, id?: string | null | undefined, type?: string | null | undefined, dimension?: string | null | undefined, residents: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> } | null | undefined> } | null | undefined };

export type GetLocationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetLocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'Locations', results?: Array<{ __typename?: 'Location', id?: string | null | undefined, name?: string | null | undefined, type?: string | null | undefined } | null | undefined> | null | undefined, info?: { __typename?: 'Info', next?: number | null | undefined } | null | undefined } | null | undefined };

export const PageInfoFragmentDoc = gql`
    fragment pageInfo on Info {
  next
}
    `;
export const CharacterCard_CharacterFragmentDoc = gql`
    fragment CharacterCard_character on Character {
  id
  name
  image
  episode {
    id
    air_date
  }
}
    `;
export const CharacterCard_CharacterWithSpecsFragmentDoc = gql`
    fragment CharacterCard_characterWithSpecs on Character {
  ...CharacterCard_character
  status
  species
  gender
  origin {
    id
    name
  }
  location {
    id
    name
  }
}
    ${CharacterCard_CharacterFragmentDoc}`;
export const EpisodeListItem_EpisodeFragmentDoc = gql`
    fragment EpisodeListItem_episode on Episode {
  id
  name
  air_date
  episode
}
    `;
export const EpisodeList_EpisodeFragmentDoc = gql`
    fragment EpisodeList_episode on Episode {
  ...EpisodeListItem_episode
}
    ${EpisodeListItem_EpisodeFragmentDoc}`;
export const CharacterProfile_CharacterFragmentDoc = gql`
    fragment CharacterProfile_character on Character {
  ...CharacterCard_characterWithSpecs
  episode {
    ...EpisodeList_episode
  }
}
    ${CharacterCard_CharacterWithSpecsFragmentDoc}
${EpisodeList_EpisodeFragmentDoc}`;
export const EpisodeCard_EpisodeFragmentDoc = gql`
    fragment EpisodeCard_episode on Episode {
  id
  name
  episode
  air_date
}
    `;
export const CharacterGridListItem_CharacterFragmentDoc = gql`
    fragment CharacterGridListItem_character on Character {
  ...CharacterCard_character
}
    ${CharacterCard_CharacterFragmentDoc}`;
export const CharacterGridList_CharacterFragmentDoc = gql`
    fragment CharacterGridList_character on Character {
  ...CharacterGridListItem_character
}
    ${CharacterGridListItem_CharacterFragmentDoc}`;
export const EpisodeProfile_EpisodeFragmentDoc = gql`
    fragment EpisodeProfile_episode on Episode {
  ...EpisodeCard_episode
  characters {
    ...CharacterGridList_character
  }
}
    ${EpisodeCard_EpisodeFragmentDoc}
${CharacterGridList_CharacterFragmentDoc}`;
export const LocationListItem_LocationFragmentDoc = gql`
    fragment LocationListItem_location on Location {
  id
  name
  type
}
    `;
export const LocationList_LocationFragmentDoc = gql`
    fragment LocationList_location on Location {
  ...LocationListItem_location
}
    ${LocationListItem_LocationFragmentDoc}`;
export const LocationCard_LocationFragmentDoc = gql`
    fragment LocationCard_location on Location {
  id
  name
  type
  dimension
}
    `;
export const LocationProfile_LocationFragmentDoc = gql`
    fragment LocationProfile_location on Location {
  ...LocationCard_location
  residents {
    ...CharacterGridList_character
  }
}
    ${LocationCard_LocationFragmentDoc}
${CharacterGridList_CharacterFragmentDoc}`;
export const GetShowDrawerDocument = gql`
    query GetShowDrawer {
  showDrawer @client
}
    `;

/**
 * __useGetShowDrawerQuery__
 *
 * To run a query within a React component, call `useGetShowDrawerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShowDrawerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShowDrawerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShowDrawerQuery(baseOptions?: Apollo.QueryHookOptions<GetShowDrawerQuery, GetShowDrawerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShowDrawerQuery, GetShowDrawerQueryVariables>(GetShowDrawerDocument, options);
      }
export function useGetShowDrawerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShowDrawerQuery, GetShowDrawerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShowDrawerQuery, GetShowDrawerQueryVariables>(GetShowDrawerDocument, options);
        }
export type GetShowDrawerQueryHookResult = ReturnType<typeof useGetShowDrawerQuery>;
export type GetShowDrawerLazyQueryHookResult = ReturnType<typeof useGetShowDrawerLazyQuery>;
export type GetShowDrawerQueryResult = Apollo.QueryResult<GetShowDrawerQuery, GetShowDrawerQueryVariables>;
export const GetCharacterDocument = gql`
    query GetCharacter($id: ID!) {
  character(id: $id) {
    name
    image
    ...CharacterProfile_character
  }
}
    ${CharacterProfile_CharacterFragmentDoc}`;

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterQuery, GetCharacterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(GetCharacterDocument, options);
      }
export function useGetCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterQuery, GetCharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(GetCharacterDocument, options);
        }
export type GetCharacterQueryHookResult = ReturnType<typeof useGetCharacterQuery>;
export type GetCharacterLazyQueryHookResult = ReturnType<typeof useGetCharacterLazyQuery>;
export type GetCharacterQueryResult = Apollo.QueryResult<GetCharacterQuery, GetCharacterQueryVariables>;
export const GetCharactersDocument = gql`
    query GetCharacters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    results {
      ...CharacterGridList_character
    }
    info {
      ...pageInfo
    }
  }
}
    ${CharacterGridList_CharacterFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions?: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetEpisodeDocument = gql`
    query GetEpisode($id: ID!) {
  episode(id: $id) {
    name
    ...EpisodeProfile_episode
  }
}
    ${EpisodeProfile_EpisodeFragmentDoc}`;

/**
 * __useGetEpisodeQuery__
 *
 * To run a query within a React component, call `useGetEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEpisodeQuery(baseOptions: Apollo.QueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, options);
      }
export function useGetEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, options);
        }
export type GetEpisodeQueryHookResult = ReturnType<typeof useGetEpisodeQuery>;
export type GetEpisodeLazyQueryHookResult = ReturnType<typeof useGetEpisodeLazyQuery>;
export type GetEpisodeQueryResult = Apollo.QueryResult<GetEpisodeQuery, GetEpisodeQueryVariables>;
export const GetEpisodesDocument = gql`
    query GetEpisodes($page: Int, $filter: FilterEpisode) {
  episodes(page: $page, filter: $filter) {
    results {
      ...EpisodeList_episode
    }
    info {
      ...pageInfo
    }
  }
}
    ${EpisodeList_EpisodeFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
      }
export function useGetEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
        }
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<typeof useGetEpisodesLazyQuery>;
export type GetEpisodesQueryResult = Apollo.QueryResult<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetLocationDocument = gql`
    query GetLocation($id: ID!) {
  location(id: $id) {
    name
    ...LocationProfile_location
  }
}
    ${LocationProfile_LocationFragmentDoc}`;

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLocationQuery(baseOptions: Apollo.QueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
      }
export function useGetLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
        }
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<typeof useGetLocationLazyQuery>;
export type GetLocationQueryResult = Apollo.QueryResult<GetLocationQuery, GetLocationQueryVariables>;
export const GetLocationsDocument = gql`
    query GetLocations($page: Int) {
  locations(page: $page) {
    results {
      ...LocationList_location
    }
    info {
      ...pageInfo
    }
  }
}
    ${LocationList_LocationFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;