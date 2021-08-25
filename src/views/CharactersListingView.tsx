import React, { useCallback, useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import { useGetCharactersQuery } from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import CharacterGridList from '@/characters/CharacterGridList';
import PAGE_INFO_FRAGMENT from '@/apollo/fragments';
import CharacterSearch from '@/characters/CharacterSearch';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { QueryParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/useRouteParams';

const GET_CHARACTERS = gql`
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
  ${CharacterGridList.fragments.character}
  ${PAGE_INFO_FRAGMENT}
`;

type CharactersListingViewQueryParams = QueryParams<
  typeof routes['characters']
>;

function CharactersListingView() {
  const { routeParams } = useRouteParams<
    {},
    CharactersListingViewQueryParams
  >();
  const name = routeParams.get('name');
  const variables = useMemo(
    () =>
      name
        ? {
            filter: { name },
          }
        : {},
    [name],
  );
  const { data, loading, error, fetchMore, networkStatus } =
    useGetCharactersQuery({
      query: GET_CHARACTERS,
      variables,
      notifyOnNetworkStatusChange: true,
    });

  if (error) {
    throw error;
  }

  const isSetVariables = networkStatus === 2;

  // Even if variables are changed, Apollo still shows previous results as "data".
  // When the "networkStatus" equals 2, it means variables have changed.
  // So we basically check this value and if it's true, we don't use previous "data".
  const characters = !isSetVariables ? data?.characters : undefined;
  const next = characters?.info?.next;
  const hasNextPage = Boolean(next);
  const results = characters?.results || [];

  const handleLoadMore = useCallback(
    () =>
      fetchMore({
        // This breaks "@apollo/client 3".
        // It doesn't toggle "loading" even if the "notifyOnNetworkStatusChange" is set to "true".
        // query: GET_CHARACTERS,
        variables: { ...variables, page: next },
      }),
    [fetchMore, next, variables],
  );

  const [sentryRef] = useInfiniteScroll({
    hasNextPage,
    loading,
    onLoadMore: handleLoadMore,
    rootMargin: '0px 0px 400px 0px',
  });

  return (
    <>
      <BaseSeo
        title="Characters"
        description="Character list of Rick and Morty TV Series"
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/characters.jpg`,
            },
          ],
        }}
      />
      <Box mb={2}>
        <CharacterSearch />
      </Box>
      {loading || results.length ? (
        <CharacterGridList
          items={results}
          // Because this is an infinite list, loading indicator will be shown when
          // the user scrolls to the bottom of the page if there is a next page.
          // If we mount/unmount loading indicator and user hits the bottom of the page fast
          // (especially on mobile devices) loading mounts, height of the scroll increases and
          // user can not see it before scrolling down a little more.
          // Thus, we can mount it and not unmount it when there is a next page.
          // I suppose this is the way 9GAG does.
          loading={loading || hasNextPage}
          loadingRef={sentryRef}
        />
      ) : (
        <Typography>Nothing found.</Typography>
      )}
    </>
  );
}

export default CharactersListingView;
