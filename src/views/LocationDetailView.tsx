import React from "react";
import gql from "graphql-tag";
import { useGetLocationQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { isNonEmptyString } from "@/modules/shared/SharedUtils";
import BaseSeo from "@/modules/seo/BaseSeo";
import LocationProfile from "@/modules/locations/LocationProfile";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      name
      ...LocationProfile_location
    }
  }
  ${LocationProfile.fragments.location}
`;

function LocationsDetailView() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useGetLocationQuery({
    query: GET_LOCATION,
    variables: isNonEmptyString(id) ? { id } : undefined,
    skip: !isNonEmptyString(id),
  });

  if (error) {
    throw error;
  }

  const { location } = data || {};

  return (
    <>
      <BaseSeo title={location?.name} />
      <LocationProfile location={location} loading={loading} />
    </>
  );
}

export default LocationsDetailView;
