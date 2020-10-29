import React from "react";
import gql from "graphql-tag";
import { useGetCharacterQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { isNonEmptyString } from "@/modules/shared/SharedUtils";
import BaseSeo from "@/modules/seo/BaseSeo";
import CharacterProfile from "../characters/CharacterProfile";

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

function CharacterDetailView() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useGetCharacterQuery({
    query: GET_CHARACTER,
    variables: isNonEmptyString(id) ? { id } : undefined,
    skip: !isNonEmptyString(id),
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

export default CharacterDetailView;
