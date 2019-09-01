import React from "react";
import LocationProfile from "components/LocationProfile";
import { useQuery } from "@apollo/react-hooks";
import { GET_LOCATION } from "app-graphql";

function Location({
  match: {
    params: { locationId }
  }
}) {
  const { data, loading } = useQuery(GET_LOCATION, {
    variables: {
      id: locationId
    }
  });

  const { location } = data || {};

  return <LocationProfile location={location} loading={loading} />;
}

export default Location;
