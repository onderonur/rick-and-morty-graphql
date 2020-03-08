import React from "react";
import produce from "immer";
import InfiniteScrollWrapper from "@/shared/components/InfiniteScrollWrapper";
import EpisodeList from "@/shared/components/EpisodeList";
import gql from "graphql-tag";
import PAGE_INFO_FRAGMENT from "@/shared/fragments/pageInfo";
import { useGetEpisodesQuery } from "@/generated/graphql";
import withApollo from "@/shared/lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import Head from "next/head";
import { getDocumentTitle } from "@/shared/utils";

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

function Episodes() {
  const { data, loading, fetchMore } = useGetEpisodesQuery({
    query: GET_EPISODES,
    notifyOnNetworkStatusChange: true,
  });

  const { episodes } = data || {};

  const results = episodes?.results;
  const next = episodes?.info?.next;
  const hasNextPage = !!next;

  return (
    <>
      <Head>
        <title>{getDocumentTitle("Episodes")}</title>
      </Head>
      <InfiniteScrollWrapper
        hasNextPage={hasNextPage}
        loading={loading}
        onLoadMore={() =>
          fetchMore({
            query: GET_EPISODES,
            variables: { page: next },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              const newEpisodes = fetchMoreResult?.episodes;
              const newData = produce(prevResult, draft => {
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

export default withApollo(Episodes, { getDataFromTree });
