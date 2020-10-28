import React from "react";
import produce from "immer";
import InfiniteScrollWrapper from "@/modules/shared/InfiniteScrollWrapper";
import PAGE_INFO_FRAGMENT from "@/modules/apollo/fragments";
import gql from "graphql-tag";
import { useGetLocationsQuery } from "@/generated/graphql";
import BaseSeo from "@/modules/seo/BaseSeo";
import LocationList from "@/modules/locations/LocationList";

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

function LocationListing() {
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
      <InfiniteScrollWrapper
        hasNextPage={hasNextPage}
        loading={loading}
        onLoadMore={() =>
          fetchMore({
            // This breaks "@apollo/client 3".
            // It doesn't toggle "loading" even if the "notifyOnNetworkStatusChange" is set to "true".
            // query: GET_LOCATIONS,
            variables: { page: next },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              const newEpisodes = fetchMoreResult?.locations;
              const newData = produce(prevResult, (draft) => {
                let { locations } = draft;
                if (
                  locations?.results &&
                  locations.info &&
                  newEpisodes?.results
                ) {
                  locations.results.push(...newEpisodes.results);
                  locations.info = newEpisodes.info;
                }
              });

              return newData;
            },
          })
        }
      >
        <LocationList locations={results} loading={loading || hasNextPage} />
      </InfiniteScrollWrapper>
    </>
  );
}

export default LocationListing;
