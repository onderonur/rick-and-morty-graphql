import React from 'react';
import gql from 'graphql-tag';
import { useGetEpisodeQuery } from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import EpisodeProfile from '@/episodes/EpisodeProfile';
import { PathParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/useRouteParams';

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      name
      ...EpisodeProfile_episode
    }
  }
  ${EpisodeProfile.fragments.episode}
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
      <EpisodeProfile episode={episode} loading={loading} />
    </>
  );
}

export default EpisodeDetailPage;
