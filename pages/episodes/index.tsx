import { useCallback } from 'react';
import EpisodeList from '@/episodes/EpisodeList';
import gql from 'graphql-tag';
import { GetEpisodesDocument, useGetEpisodesQuery } from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import PAGE_INFO_FRAGMENT from '@/apollo/fragments';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { GetServerSideProps } from 'next';
import { addApolloState, initializeApollo } from '@/apollo/apollo';

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

function EpisodesListingPage() {
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

  const handleLoadMore = useCallback(
    () =>
      fetchMore({
        // This breaks "@apollo/client 3".
        // It doesn't toggle "loading" even if the "notifyOnNetworkStatusChange" is set to "true".
        // query: GET_EPISODES,
        variables: { page: next },
      }),
    [fetchMore, next],
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
      <EpisodeList
        items={results}
        loading={loading || hasNextPage}
        loadingRef={sentryRef}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetEpisodesDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default EpisodesListingPage;
