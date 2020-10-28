import React from "react";
import produce from "immer";
import InfiniteScrollWrapper from "@/modules/shared/InfiniteScrollWrapper";
import EpisodeList from "@/modules/episodes/EpisodeList";
import gql from "graphql-tag";
import { useGetEpisodesQuery } from "@/generated/graphql";
import BaseSeo from "@/modules/seo/BaseSeo";
import PAGE_INFO_FRAGMENT from "@/modules/apollo/fragments";

const GET_EPISODES = gql`
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
  ${EpisodeList.fragments.episode}
  ${PAGE_INFO_FRAGMENT}
`;

function EpisodeListing() {
  const { data, loading, error, fetchMore } = useGetEpisodesQuery({
    query: GET_EPISODES,
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    throw error;
  }

  const { episodes } = data || {};

  const results = episodes?.results;
  const next = episodes?.info?.next;
  const hasNextPage = !!next;

  return (
    <>
      <BaseSeo
        title="Episodes"
        description="Episode list of Rick and Morty TV Series"
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/episodes.jpg`,
            },
          ],
        }}
      />
      <InfiniteScrollWrapper
        hasNextPage={hasNextPage}
        loading={loading}
        onLoadMore={() =>
          fetchMore({
            // This breaks "@apollo/client 3".
            // It doesn't toggle "loading" even if the "notifyOnNetworkStatusChange" is set to "true".
            // query: GET_EPISODES,
            variables: { page: next },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              const newEpisodes = fetchMoreResult?.episodes;
              const newData = produce(prevResult, (draft) => {
                let { episodes } = draft;
                if (
                  episodes?.results &&
                  episodes?.info &&
                  newEpisodes?.results
                ) {
                  episodes.results.push(...newEpisodes.results);
                  episodes.info = newEpisodes.info;
                }
              });

              return newData;
            },
          })
        }
      >
        <EpisodeList episodes={results} loading={loading || hasNextPage} />
      </InfiniteScrollWrapper>
    </>
  );
}

export default EpisodeListing;
