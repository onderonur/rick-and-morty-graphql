import React from "react";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import { GET_LOCATIONS } from "app-graphql";
import LocationList from "components/LocationList";
import { useQuery } from "@apollo/react-hooks";
import { resolveConnectionResponse } from "utils";
import produce from "immer";

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
