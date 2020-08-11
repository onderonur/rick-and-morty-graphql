import React from "react";
import LocationProfile from "./components/LocationProfile";
import gql from "graphql-tag";
import { useGetLocationQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { isNonEmptyString } from "@/utils";
import BaseSeo from "@/components/BaseSeo";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      name
      ...LocationProfile_location
    }
  }
  ${LocationProfile.fragments.location}
`;

function LocationDetail() {
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
      <BaseSeo title={location?.name || ""} />
      <LocationProfile location={location} loading={loading} />
    </>
  );
}

export default LocationDetail;
