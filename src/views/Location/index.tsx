import React from "react";
import LocationProfile from "./components/LocationProfile";
import gql from "graphql-tag";
import { useGetLocationQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { isNonEmptyString } from "@/shared/utils";
import { NextSeo } from "next-seo";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      name
      ...LocationProfile_location
    }
  }
  ${LocationProfile.fragments.location}
`;

function Location() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useGetLocationQuery({
    query: GET_LOCATION,
    variables: isNonEmptyString(id) ? { id } : undefined,
    skip: !isNonEmptyString(id),
  });

  const { location } = data || {};

  return (
    <>
      <NextSeo title={location?.name || ""} />
      <LocationProfile location={location} loading={loading} />
    </>
  );
}

export default Location;
