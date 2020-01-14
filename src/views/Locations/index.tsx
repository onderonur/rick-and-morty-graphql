import React from "react";
import produce from "immer";
import InfiniteScrollWrapper from "shared/components/InfiniteScrollWrapper";
import LocationList from "./components/LocationList";
import PAGE_INFO_FRAGMENT from "shared/fragments/pageInfo";
import gql from "graphql-tag";
import { useGetLocationsQuery } from "generated/graphql";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
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

function Locations() {
  const { data, loading, fetchMore } = useGetLocationsQuery({
    notifyOnNetworkStatusChange: true
  });

  const { locations } = data || {};
  const results = locations?.results;
  const next = locations?.info?.next;
  const hasNextPage = !!next;

  return (
    <InfiniteScrollWrapper
      hasNextPage={hasNextPage}
      loading={loading}
      onLoadMore={() =>
        fetchMore({
          query: GET_LOCATIONS,
          variables: { page: next },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            const newLocations = fetchMoreResult?.locations;

            const newData = produce(prevResult, draft => {
              const { locations } = draft;
              if (locations?.results && newLocations?.results) {
                locations.results.push(...newLocations.results);
                locations.info = newLocations.info;
              }
            });

            return newData;
          }
        })
      }
    >
      <LocationList locations={results} loading={loading || hasNextPage} />
    </InfiniteScrollWrapper>
  );
}

export default Locations;
