import React from "react";
import produce from "immer";
import InfiniteScrollWrapper from "@/components/InfiniteScrollWrapper";
import LocationList from "./components/LocationList";
import PAGE_INFO_FRAGMENT from "@/gql/fragments/pageInfo";
import gql from "graphql-tag";
import { useGetLocationsQuery } from "@/generated/graphql";
import { NextSeo } from "next-seo";

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

function Locations() {
  const { data, loading, fetchMore } = useGetLocationsQuery({
    query: GET_LOCATIONS,
    notifyOnNetworkStatusChange: true,
  });

  const locations = data?.locations;
  const results = locations?.results;
  const next = locations?.info?.next;
  const hasNextPage = !!next;

  return (
    <>
      <NextSeo
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
            query: GET_LOCATIONS,
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

export default Locations;
