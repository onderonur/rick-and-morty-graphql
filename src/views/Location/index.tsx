import React from "react";
import { useParams } from "react-router-dom";
import LocationProfile from "./components/LocationProfile";
import gql from "graphql-tag";
import { useGetLocationQuery } from "generated/graphql";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      ...LocationProfile_location
    }
  }
  ${LocationProfile.fragments.location}
`;

function Location() {
  const { locationId } = useParams();
  const { data, loading } = useGetLocationQuery({
    query: GET_LOCATION,
    variables: locationId ? { id: locationId } : undefined,
    skip: !locationId
  });

  const { location } = data || {};

  return <LocationProfile location={location} loading={loading} />;
}

export default Location;
