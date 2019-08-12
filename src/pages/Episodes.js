import React from "react";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import { GET_EPISODES } from "app-graphql";
import EpisodeList from "components/EpisodeList";
import { useQuery } from "@apollo/react-hooks";
import { resolveConnectionResponse } from "utils";

function Episodes() {
  const { data, loading, fetchMore } = useQuery(GET_EPISODES, {
    notifyOnNetworkStatusChange: true
  });

  const { results, pageInfo } = resolveConnectionResponse(data.episodes);
  const { next: hasNextPage } = pageInfo;

  return (
    <InfiniteScrollWrapper
      hasNextPage={hasNextPage}
      loading={loading}
      onLoadMore={() =>
        fetchMore({
          query: GET_EPISODES,
          variables: { page: pageInfo.next },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            const newData = {
              episodes: {
                ...prevResult.episodes,
                results: [
                  ...prevResult.episodes.results,
                  ...fetchMoreResult.episodes.results
                ],
                info: {
                  ...fetchMoreResult.episodes.info
                }
              }
            };

            return newData;
          }
        })
      }
    >
      <EpisodeList episodes={results} loading={loading || hasNextPage} />
    </InfiniteScrollWrapper>
  );
}

export default Episodes;
