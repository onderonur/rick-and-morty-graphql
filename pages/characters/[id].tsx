import React from 'react';
import gql from 'graphql-tag';
import { useGetCharacterQuery } from '@/generated/graphql';
import BaseSeo from '@/seo/BaseSeo';
import CharacterProfile from '@/characters/CharacterProfile';
import { PathParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/useRouteParams';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      ...CharacterProfile_character
    }
  }
  ${CharacterProfile.fragments.character}
`;

type CharacterDetailPagePathParams = PathParams<typeof routes['character']>;

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
      <CharacterProfile character={character} loading={loading} />
    </>
  );
}

export default CharacterDetailPage;
