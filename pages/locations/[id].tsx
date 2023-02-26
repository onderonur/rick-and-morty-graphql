import gql from 'graphql-tag';
import { GetLocationDocument, useGetLocationQuery } from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import { PathParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/RoutingHooks';
import CharacterGridList from '@/characters/CharacterGridList';
import LocationCard from '@/locations/LocationCard';
import Profile from '@/common/Profile';
import { GetServerSideProps } from 'next';
import { addApolloState, initializeApollo } from '@/apollo/apollo';

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      name
      ...LocationCard_location
      residents {
        ...CharacterGridList_character
      }
    }
  }
  ${LocationCard.fragments.location}
  ${CharacterGridList.fragments.character}
`;

type LocationDetailPagePathParams = PathParams<typeof routes.location>;

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
      <Profile
        loading={loading}
        infoCard={location && <LocationCard titleAs="h1" location={location} />}
        fullWidthInfoCard
        mainSectionTitle="Residents"
        mainSection={
          location?.residents && (
            <CharacterGridList items={location.residents} />
          )
        }
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetLocationDocument,
    variables: { id: req.params?.id },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default LocationDetailPage;
