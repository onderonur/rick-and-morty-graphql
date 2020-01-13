import React from "react";
import { useQuery } from "@apollo/react-hooks";
import produce from "immer";
import { resolveConnectionResponse } from "shared/utils";
import InfiniteScrollWrapper from "shared/components/InfiniteScrollWrapper";
import LocationList from "./components/LocationList";
import PAGE_INFO_FRAGMENT from "shared/fragments/pageInfo";
import gql from "graphql-tag";

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
  const { data, loading, fetchMore } = useQuery(GET_LOCATIONS, {
    notifyOnNetworkStatusChange: true
  });

  const { locations } = data || {};
  const { results, pageInfo } = resolveConnectionResponse(locations);
  const { next: hasNextPage } = pageInfo;

  return (
    <InfiniteScrollWrapper
      hasNextPage={hasNextPage}
      loading={loading}
      onLoadMore={() =>
        fetchMore({
          query: GET_LOCATIONS,
          variables: { page: pageInfo.next },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            const { locations: newLocations } = fetchMoreResult;

            const newData = produce(prevResult, draft => {
              const { locations } = draft;
              locations.results.push(...newLocations.results);
              locations.info = newLocations.info;
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
