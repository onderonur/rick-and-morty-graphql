import React from "react";
import { Box } from "@material-ui/core";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import CharacterSearch from "components/CharacterSearch";
import { GET_CHARACTERS } from "app-graphql";
import CharacterGridList from "components/CharacterGridList";
import useQueryString from "hooks/useQueryString";
import { useQuery } from "@apollo/react-hooks";
import { resolveConnectionResponse } from "utils";

function Characters({ location }) {
  const { name } = useQueryString(location);
  const filter = {
    name
  };
  const { data, loading, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      filter
    },
    notifyOnNetworkStatusChange: true
  });

  const { results, pageInfo } = resolveConnectionResponse(data.characters);
  const { next: hasNextPage } = pageInfo;

  function handleLoadMore(fetchMore, pageInfo) {
    return fetchMore({
      query: GET_CHARACTERS,
      variables: { filter, page: pageInfo.next },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newData = {
          characters: {
            ...prevResult.characters,
            results: [
              ...prevResult.characters.results,
              ...fetchMoreResult.characters.results
            ],
            info: {
              ...fetchMoreResult.characters.info
            }
          }
        };

        return newData;
      }
    });
  }

  return (
    <>
      <Box mb={2}>
        <CharacterSearch />
      </Box>
      <InfiniteScrollWrapper
        hasNextPage={hasNextPage}
        loading={loading}
        onLoadMore={() => handleLoadMore(fetchMore, pageInfo)}
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
    </>
  );
}

export default Characters;
