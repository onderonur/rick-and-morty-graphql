import React from 'react';
import gql from 'graphql-tag';
import { useGetCharacterQuery } from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import { PathParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/useRouteParams';
import Profile from '@/common/Profile';
import CharacterCard from '@/characters/CharacterCard';
import EpisodeList from '@/episodes/EpisodeList';

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

export default CharacterDetailPage;
