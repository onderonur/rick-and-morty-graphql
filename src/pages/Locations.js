import React from "react";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import { GET_LOCATIONS } from "app-graphql";
import LocationList from "components/LocationList";
import { useQuery } from "@apollo/react-hooks";
import { resolveConnectionResponse } from "utils";

function Locations() {
  const { data, loading, fetchMore } = useQuery(GET_LOCATIONS, {
    notifyOnNetworkStatusChange: true
  });

  const { locations } = data;
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
            const newData = {
              locations: {
                ...prevResult.locations,
                results: [
                  ...prevResult.locations.results,
                  ...fetchMoreResult.locations.results
                ],
                info: {
                  ...fetchMoreResult.locations.info
                }
              }
            };

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
