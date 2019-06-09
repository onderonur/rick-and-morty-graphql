import React, { useMemo } from "react";
import { Box } from "@material-ui/core";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import CharacterSearch from "components/CharacterSearch";
import queryString from "query-string";
import { GET_CHARACTERS } from "app-graphql";
import CharactersQuery from "components/CharactersQuery";
import CharactersGridList from "components/CharactersGridList";

function Characters({ location: { search } }) {
  const searcyQuery = useMemo(() => queryString.parse(search), [search]);

  let filter = {
    name: searcyQuery.name
  };

  return (
    <>
      <Box mb={2}>
        <CharacterSearch />
      </Box>
      <CharactersQuery filter={filter}>
        {({ results, pageInfo, loading, fetchMore }) => {
          return (
            <InfiniteScrollWrapper
              hasNextPage={pageInfo ? pageInfo.next : null}
              loading={loading}
              loadMore={() =>
                fetchMore({
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
                })
              }
            >
              <CharactersGridList characters={results} loading={loading} />
            </InfiniteScrollWrapper>
          );
        }}
      </CharactersQuery>
    </>
  );
}

export default Characters;
