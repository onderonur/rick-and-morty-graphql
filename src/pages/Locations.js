import React from "react";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import { GET_LOCATIONS } from "app-graphql";
import LocationsConnectionQuery from "containers/LocationsConnectionQuery";
import LocationList from "components/LocationList";

function Locations() {
  return (
    <LocationsConnectionQuery>
      {({ results, pageInfo, loading, fetchMore }) => {
        const hasNextPage = pageInfo ? pageInfo.next : null;
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
            <LocationList
              locations={results}
              loading={loading || hasNextPage}
            />
          </InfiniteScrollWrapper>
        );
      }}
    </LocationsConnectionQuery>
  );
}

export default Locations;
