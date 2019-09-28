import React from "react";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import { GET_EPISODES } from "app-graphql";
import EpisodeList from "components/EpisodeList";
import { useQuery } from "@apollo/react-hooks";
import { resolveConnectionResponse } from "utils";
import produce from "immer";

function Episodes() {
  const { data, loading, fetchMore } = useQuery(GET_EPISODES, {
    notifyOnNetworkStatusChange: true
  });

  const { episodes } = data || {};
  const { results, pageInfo } = resolveConnectionResponse(episodes);
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
            const { episodes: newEpisodes } = fetchMoreResult;

            const newData = produce(prevResult, draft => {
              let { episodes } = draft;
              episodes.results.push(...newEpisodes.results);
              episodes.info = newEpisodes.info;
            });

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
