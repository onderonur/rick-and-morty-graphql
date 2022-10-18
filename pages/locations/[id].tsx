import React from 'react';
import gql from 'graphql-tag';
import { useGetLocationQuery } from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import LocationProfile from '@/locations/LocationProfile';
import { PathParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/useRouteParams';

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      name
      ...LocationProfile_location
    }
  }
  ${LocationProfile.fragments.location}
`;

type LocationDetailPagePathParams = PathParams<typeof routes['location']>;

function LocationDetailPage() {
  const { routeParams } = useRouteParams<LocationDetailPagePathParams>();
  const id = routeParams.get('id');
  const { data, loading, error } = useGetLocationQuery({
    query: GET_LOCATION,
    variables: id ? { id } : undefined,
    skip: !id,
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

export default LocationDetailPage;
