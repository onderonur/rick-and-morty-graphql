import React from "react";
import { useQuery } from "@apollo/react-hooks";
import produce from "immer";
import { resolveConnectionResponse } from "shared/utils";
import InfiniteScrollWrapper from "shared/components/InfiniteScrollWrapper";
import EpisodeList from "shared/components/EpisodeList";
import gql from "graphql-tag";
import PAGE_INFO_FRAGMENT from "shared/fragments/pageInfo";

const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        ...EpisodeList_episode
      }
      info {
        ...pageInfo
      }
    }
  }
  ${EpisodeList.fragments.episode}
  ${PAGE_INFO_FRAGMENT}
`;

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
