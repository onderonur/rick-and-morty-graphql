import gql from 'graphql-tag';
import {
  GetCharacterDocument,
  useGetCharacterQuery,
} from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import { PathParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/RoutingHooks';
import Profile from '@/common/Profile';
import CharacterCard from '@/characters/CharacterCard';
import EpisodeList from '@/episodes/EpisodeList';
import { addApolloState, initializeApollo } from '@/apollo/apollo';
import { GetServerSideProps } from 'next';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      ...CharacterCard_characterWithSpecs
      episode {
        ...EpisodeList_episode
      }
    }
  }
  ${CharacterCard.fragments.characterWithSpecs}
  ${EpisodeList.fragments.episode}
`;

type CharacterDetailPagePathParams = PathParams<typeof routes.character>;

function CharacterDetailPage() {
  const { routeParams } = useRouteParams<CharacterDetailPagePathParams>();
  const id = routeParams.get('id');
  const { data, loading, error } = useGetCharacterQuery({
    query: GET_CHARACTER,
    variables: id ? { id } : undefined,
    skip: !id,
  });

  if (error) {
    throw error;
  }

  const character = data?.character;

  return (
    <>
      <BaseSeo
        title={character?.name}
        openGraph={{
          images: character?.image ? [{ url: character?.image }] : [],
        }}
      />
      <Profile
        loading={loading}
        infoCard={
          character && <CharacterCard titleAs="h1" character={character} />
        }
        mainSectionTitle="Episodes"
        mainSection={
          character?.episode && (
            <EpisodeList items={character.episode} maxVisibleItemCount={5} />
          )
        }
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetCharacterDocument,
    variables: { id: req.params?.id },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default CharacterDetailPage;
