import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import LocationProfile from "./components/LocationProfile";
import gql from "graphql-tag";

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
  const { data, loading } = useQuery(GET_LOCATION, {
    variables: {
      id: locationId
    }
  });

  const { location } = data || {};

  return <LocationProfile location={location} loading={loading} />;
}

export default Location;
