import React from "react";
import LocationProfile from "./components/LocationProfile";
import gql from "graphql-tag";
import { useGetLocationQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import withApollo from "@/shared/lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      ...LocationProfile_location
    }
  }
  ${LocationProfile.fragments.location}
`;

function Location() {
  const router = useRouter();
  const { id } = router.query;
  // TODO: I've copy-pasted this function for router queries.
  // Will look for a solid solution.
  const isValidId = (id): id is string => typeof id === "string" && !!id;
  const { data, loading } = useGetLocationQuery({
    query: GET_LOCATION,
    variables: isValidId(id) ? { id } : undefined,
    skip: !isValidId(id),
  });

  const { location } = data || {};

  return <LocationProfile location={location} loading={loading} />;
}

export default withApollo(Location, { getDataFromTree });
