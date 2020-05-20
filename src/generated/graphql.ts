import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  showDrawer: Scalars['Boolean'];
};


export type QueryCharacterArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
};


export type QueryEpisodeArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryEpisodesArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
};


export type QueryLocationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryLocationsArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterLocation>;
};

export type Character = {
  __typename?: 'Character';
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode?: Maybe<Array<Maybe<Episode>>>;
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents?: Maybe<Array<Maybe<Character>>>;
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type FilterLocation = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
  __typename?: 'Mutation';
  toggleDrawer: Scalars['Boolean'];
};


export type MutationToggleDrawerArgs = {
  showDrawer: Scalars['Boolean'];
};

export type GetShowDrawerQueryVariables = {};


export type GetShowDrawerQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'showDrawer'>
);

export type CharacterCard_CharacterFragment = (
  { __typename?: 'Character' }
  & Pick<Character, 'id' | 'name' | 'image'>
  & { episode?: Maybe<Array<Maybe<(
    { __typename?: 'Episode' }
    & Pick<Episode, 'id' | 'air_date'>
  )>>> }
);

export type CharacterCard_CharacterWithSpecsFragment = (
  { __typename?: 'Character' }
  & Pick<Character, 'status' | 'species' | 'gender'>
  & { origin?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name'>
  )>, location?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name'>
  )> }
  & CharacterCard_CharacterFragment
);

export type CharacterGridList_CharacterFragment = (
  { __typename?: 'Character' }
  & CharacterGridListItem_CharacterFragment
);

export type CharacterGridListItem_CharacterFragment = (
  { __typename?: 'Character' }
  & CharacterCard_CharacterFragment
);

export type EpisodeList_EpisodeFragment = (
  { __typename?: 'Episode' }
  & EpisodeListItem_EpisodeFragment
);

export type EpisodeListItem_EpisodeFragment = (
  { __typename?: 'Episode' }
  & Pick<Episode, 'id' | 'name' | 'air_date' | 'episode'>
);

export type PageInfoFragment = (
  { __typename?: 'Info' }
  & Pick<Info, 'next'>
);

export type ToggleDrawerMutationVariables = {
  showDrawer: Scalars['Boolean'];
};


export type ToggleDrawerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleDrawer'>
);

export type CharacterProfile_CharacterFragment = (
  { __typename?: 'Character' }
  & { episode?: Maybe<Array<Maybe<(
    { __typename?: 'Episode' }
    & EpisodeList_EpisodeFragment
  )>>> }
  & CharacterCard_CharacterWithSpecsFragment
);

export type GetCharacterQueryVariables = {
  id: Scalars['ID'];
};


export type GetCharacterQuery = (
  { __typename?: 'Query' }
  & { character?: Maybe<(
    { __typename?: 'Character' }
    & Pick<Character, 'name' | 'image'>
    & CharacterProfile_CharacterFragment
  )> }
);

export type GetCharactersQueryVariables = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
};


export type GetCharactersQuery = (
  { __typename?: 'Query' }
  & { characters?: Maybe<(
    { __typename?: 'Characters' }
    & { results?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & CharacterGridList_CharacterFragment
    )>>>, info?: Maybe<(
      { __typename?: 'Info' }
      & PageInfoFragment
    )> }
  )> }
);

export type EpisodeCard_EpisodeFragment = (
  { __typename?: 'Episode' }
  & Pick<Episode, 'id' | 'name' | 'episode' | 'air_date'>
);

export type EpisodeProfile_EpisodeFragment = (
  { __typename?: 'Episode' }
  & { characters?: Maybe<Array<Maybe<(
    { __typename?: 'Character' }
    & CharacterGridList_CharacterFragment
  )>>> }
  & EpisodeCard_EpisodeFragment
);

export type GetEpisodeQueryVariables = {
  id: Scalars['ID'];
};


export type GetEpisodeQuery = (
  { __typename?: 'Query' }
  & { episode?: Maybe<(
    { __typename?: 'Episode' }
    & Pick<Episode, 'name'>
    & EpisodeProfile_EpisodeFragment
  )> }
);

export type GetEpisodesQueryVariables = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
};


export type GetEpisodesQuery = (
  { __typename?: 'Query' }
  & { episodes?: Maybe<(
    { __typename?: 'Episodes' }
    & { results?: Maybe<Array<Maybe<(
      { __typename?: 'Episode' }
      & EpisodeList_EpisodeFragment
    )>>>, info?: Maybe<(
      { __typename?: 'Info' }
      & PageInfoFragment
    )> }
  )> }
);

export type LocationCard_LocationFragment = (
  { __typename?: 'Location' }
  & Pick<Location, 'id' | 'name' | 'type' | 'dimension'>
);

export type LocationProfile_LocationFragment = (
  { __typename?: 'Location' }
  & { residents?: Maybe<Array<Maybe<(
    { __typename?: 'Character' }
    & CharacterGridList_CharacterFragment
  )>>> }
  & LocationCard_LocationFragment
);

export type GetLocationQueryVariables = {
  id: Scalars['ID'];
};


export type GetLocationQuery = (
  { __typename?: 'Query' }
  & { location?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'name'>
    & LocationProfile_LocationFragment
  )> }
);

export type LocationList_LocationFragment = (
  { __typename?: 'Location' }
  & LocationListItem_LocationFragment
);

export type LocationListItem_LocationFragment = (
  { __typename?: 'Location' }
  & Pick<Location, 'id' | 'name' | 'type'>
);

export type GetLocationsQueryVariables = {
  page?: Maybe<Scalars['Int']>;
};


export type GetLocationsQuery = (
  { __typename?: 'Query' }
  & { locations?: Maybe<(
    { __typename?: 'Locations' }
    & { results?: Maybe<Array<Maybe<(
      { __typename?: 'Location' }
      & LocationList_LocationFragment
    )>>>, info?: Maybe<(
      { __typename?: 'Info' }
      & PageInfoFragment
    )> }
  )> }
);

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
export function useGetShowDrawerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetShowDrawerQuery, GetShowDrawerQueryVariables>) {
        return ApolloReactHooks.useQuery<GetShowDrawerQuery, GetShowDrawerQueryVariables>(GetShowDrawerDocument, baseOptions);
      }
export function useGetShowDrawerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetShowDrawerQuery, GetShowDrawerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetShowDrawerQuery, GetShowDrawerQueryVariables>(GetShowDrawerDocument, baseOptions);
        }
export type GetShowDrawerQueryHookResult = ReturnType<typeof useGetShowDrawerQuery>;
export type GetShowDrawerLazyQueryHookResult = ReturnType<typeof useGetShowDrawerLazyQuery>;
export type GetShowDrawerQueryResult = ApolloReactCommon.QueryResult<GetShowDrawerQuery, GetShowDrawerQueryVariables>;
export const ToggleDrawerDocument = gql`
    mutation toggleDrawer($showDrawer: Boolean!) {
  toggleDrawer(showDrawer: $showDrawer) @client
}
    `;
export type ToggleDrawerMutationFn = ApolloReactCommon.MutationFunction<ToggleDrawerMutation, ToggleDrawerMutationVariables>;

/**
 * __useToggleDrawerMutation__
 *
 * To run a mutation, you first call `useToggleDrawerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleDrawerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleDrawerMutation, { data, loading, error }] = useToggleDrawerMutation({
 *   variables: {
 *      showDrawer: // value for 'showDrawer'
 *   },
 * });
 */
export function useToggleDrawerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleDrawerMutation, ToggleDrawerMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleDrawerMutation, ToggleDrawerMutationVariables>(ToggleDrawerDocument, baseOptions);
      }
export type ToggleDrawerMutationHookResult = ReturnType<typeof useToggleDrawerMutation>;
export type ToggleDrawerMutationResult = ApolloReactCommon.MutationResult<ToggleDrawerMutation>;
export type ToggleDrawerMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleDrawerMutation, ToggleDrawerMutationVariables>;
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
export function useGetCharacterQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCharacterQuery, GetCharacterQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(GetCharacterDocument, baseOptions);
      }
export function useGetCharacterLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCharacterQuery, GetCharacterQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(GetCharacterDocument, baseOptions);
        }
export type GetCharacterQueryHookResult = ReturnType<typeof useGetCharacterQuery>;
export type GetCharacterLazyQueryHookResult = ReturnType<typeof useGetCharacterLazyQuery>;
export type GetCharacterQueryResult = ApolloReactCommon.QueryResult<GetCharacterQuery, GetCharacterQueryVariables>;
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
export function useGetCharactersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, baseOptions);
      }
export function useGetCharactersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, baseOptions);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = ApolloReactCommon.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
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
export function useGetEpisodeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, baseOptions);
      }
export function useGetEpisodeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, baseOptions);
        }
export type GetEpisodeQueryHookResult = ReturnType<typeof useGetEpisodeQuery>;
export type GetEpisodeLazyQueryHookResult = ReturnType<typeof useGetEpisodeLazyQuery>;
export type GetEpisodeQueryResult = ApolloReactCommon.QueryResult<GetEpisodeQuery, GetEpisodeQueryVariables>;
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
export function useGetEpisodesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, baseOptions);
      }
export function useGetEpisodesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, baseOptions);
        }
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<typeof useGetEpisodesLazyQuery>;
export type GetEpisodesQueryResult = ApolloReactCommon.QueryResult<GetEpisodesQuery, GetEpisodesQueryVariables>;
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
export function useGetLocationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, baseOptions);
      }
export function useGetLocationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, baseOptions);
        }
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<typeof useGetLocationLazyQuery>;
export type GetLocationQueryResult = ApolloReactCommon.QueryResult<GetLocationQuery, GetLocationQueryVariables>;
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
export function useGetLocationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, baseOptions);
      }
export function useGetLocationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, baseOptions);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsQueryResult = ApolloReactCommon.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Character: ResolverTypeWrapper<Character>;
  Location: ResolverTypeWrapper<Location>;
  Episode: ResolverTypeWrapper<Episode>;
  FilterCharacter: FilterCharacter;
  Characters: ResolverTypeWrapper<Characters>;
  Info: ResolverTypeWrapper<Info>;
  FilterLocation: FilterLocation;
  Locations: ResolverTypeWrapper<Locations>;
  FilterEpisode: FilterEpisode;
  Episodes: ResolverTypeWrapper<Episodes>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Query: {};
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Character: Character;
  Location: Location;
  Episode: Episode;
  FilterCharacter: FilterCharacter;
  Characters: Characters;
  Info: Info;
  FilterLocation: FilterLocation;
  Locations: Locations;
  FilterEpisode: FilterEpisode;
  Episodes: Episodes;
  CacheControlScope: CacheControlScope;
  Upload: Scalars['Upload'];
  Mutation: {};
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, never>>;
  characters?: Resolver<Maybe<ResolversTypes['Characters']>, ParentType, ContextType, RequireFields<QueryCharactersArgs, never>>;
  episode?: Resolver<Maybe<ResolversTypes['Episode']>, ParentType, ContextType, RequireFields<QueryEpisodeArgs, never>>;
  episodes?: Resolver<Maybe<ResolversTypes['Episodes']>, ParentType, ContextType, RequireFields<QueryEpisodesArgs, never>>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QueryLocationArgs, never>>;
  locations?: Resolver<Maybe<ResolversTypes['Locations']>, ParentType, ContextType, RequireFields<QueryLocationsArgs, never>>;
  showDrawer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  residents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type EpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Episode'] = ResolversParentTypes['Episode']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  air_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CharactersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Characters'] = ResolversParentTypes['Characters']> = {
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LocationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Locations'] = ResolversParentTypes['Locations']> = {
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type EpisodesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Episodes'] = ResolversParentTypes['Episodes']> = {
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  toggleDrawer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationToggleDrawerArgs, 'showDrawer'>>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Episode?: EpisodeResolvers<ContextType>;
  Characters?: CharactersResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  Locations?: LocationsResolvers<ContextType>;
  Episodes?: EpisodesResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
