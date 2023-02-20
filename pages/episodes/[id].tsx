import gql from 'graphql-tag';
import { GetEpisodeDocument, useGetEpisodeQuery } from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import { PathParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/useRouteParams';
import Profile from '@/common/Profile';
import EpisodeCard from '@/episodes/EpisodeCard';
import CharacterGridList from '@/characters/CharacterGridList';
import { GetServerSideProps } from 'next';
import { addApolloState, initializeApollo } from '@/apollo/apollo';

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      name
      ...EpisodeCard_episode
      characters {
        ...CharacterGridList_character
      }
    }
  }
  ${EpisodeCard.fragments.episode}
  ${CharacterGridList.fragments.character}
`;

type EpisodeDetailPagePathParams = PathParams<typeof routes.episode>;

function EpisodeDetailPage() {
  const { routeParams } = useRouteParams<EpisodeDetailPagePathParams>();
  const id = routeParams.get('id');
  const { data, loading, error } = useGetEpisodeQuery({
    query: GET_EPISODE,
    variables: id ? { id } : undefined,
    skip: !id,
  });

  if (error) {
    throw error;
  }

  const episode = data?.episode;

  return (
    <>
      <BaseSeo title={episode?.name} />
      <Profile
        loading={loading}
        infoCard={episode && <EpisodeCard titleAs="h1" episode={episode} />}
        fullWidthInfoCard
        mainSectionTitle="Characters"
        mainSection={
          episode?.characters && (
            <CharacterGridList items={episode.characters} />
          )
        }
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetEpisodeDocument,
    variables: { id: req.params?.id },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default EpisodeDetailPage;
