import React from 'react';
import gql from 'graphql-tag';
import { useGetLocationQuery } from '@/generated/graphql';
import { isNonEmptyString } from '@/common/CommonUtils';
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

type LocationDetailViewPathParams = PathParams<typeof routes['location']>;

function LocationDetailView() {
  const { routeParams } = useRouteParams<LocationDetailViewPathParams>();
  const id = routeParams.get('id');
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

export default LocationDetailView;
