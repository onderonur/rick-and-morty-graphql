import { useCallback } from 'react';
import PAGE_INFO_FRAGMENT from '@/apollo/fragments';
import { GetLocationsDocument, useGetLocationsQuery } from '@/gql/graphql';
import BaseSeo from '@/seo/BaseSeo';
import LocationList from '@/locations/LocationList';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { GetServerSideProps } from 'next';
import { addApolloState, initializeApollo } from '@/apollo/apollo';
import { gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations($page: Int) {
    locations(page: $page) {
      results {
        ...LocationList_location
      }
      info {
        ...pageInfo
      }
    }
  }
  ${LocationList.fragments.location}
  ${PAGE_INFO_FRAGMENT}
`;

function LocationsListingPage() {
  const { data, loading, error, fetchMore } = useGetLocationsQuery({
    query: GET_LOCATIONS,
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    throw error;
  }

  const locations = data?.locations;
  const results = locations?.results;
  const next = locations?.info?.next;
  const hasNextPage = !!next;

  const handleLoadMore = useCallback(
    () =>
      fetchMore({
        // This breaks "@apollo/client 3".
        // It doesn't toggle "loading" even if the "notifyOnNetworkStatusChange" is set to "true".
        // query: GET_LOCATIONS,
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
        title="Locations"
        description="Location list of Rick and Morty TV Series"
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/locations.jpg`,
            },
          ],
        }}
      />
      <LocationList
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
    query: GetLocationsDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default LocationsListingPage;
