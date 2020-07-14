import React from "react";
import { Box, Typography } from "@material-ui/core";
import { produce } from "immer";
import CharacterSearch from "./components/CharacterSearch";
import InfiniteScrollWrapper from "@/components/InfiniteScrollWrapper";
import CharacterGridList from "@/components/CharacterGridList";
import gql from "graphql-tag";
import PAGE_INFO_FRAGMENT from "@/gql/fragments/pageInfo";
import { useGetCharactersQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

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

function CharacterListing() {
  const router = useRouter();
  const { name } = router.query;
  const variables =
    typeof name === "string"
      ? {
          filter: { name },
        }
      : {};
  const { data, loading, fetchMore, networkStatus } = useGetCharactersQuery({
    query: GET_CHARACTERS,
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const isSetVariables = networkStatus === 2;

  // Even if variables are changed, Apollo still shows previous results as "data".
  // When the "networkStatus" equals 2, it means variables have changed.
  // So we basically check this value and if it's true, we don't use previous "data".
  const characters = !isSetVariables ? data?.characters : undefined;
  const next = characters?.info?.next;

  const hasNextPage = Boolean(next);
  const results = characters?.results || [];

  return (
    <>
      <NextSeo
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
        <InfiniteScrollWrapper
          hasNextPage={!!next}
          loading={loading}
          onLoadMore={() =>
            fetchMore({
              query: GET_CHARACTERS,
              variables: { /*...variables,*/ page: next },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                const newCharacters = fetchMoreResult?.characters;
                const newData = produce(prevResult, (draft) => {
                  let { characters } = draft;
                  if (
                    characters?.results &&
                    newCharacters?.results &&
                    newCharacters?.info
                  ) {
                    characters.results.push(...newCharacters.results);
                    characters.info = newCharacters.info;
                  }
                });

                return newData;
              },
            })
          }
        >
          <CharacterGridList
            characters={results}
            // Because this is an infinite list, loading indicator will be shown when
            // the user scrolls to the bottom of the page if there is a next page.
            // If we mount/unmount loading indicator and user hits the bottom of the page fast
            // (especially on mobile devices) loading mounts, height of the scroll increases and
            // user can not see it before scrolling down a little more.
            // Thus, we can mount it and not unmount it when there is a next page.
            // I suppose this is the way 9GAG does.
            loading={loading || hasNextPage}
          />
        </InfiniteScrollWrapper>
      ) : (
        <Typography>Nothing found.</Typography>
      )}
    </>
  );
}

export default CharacterListing;
