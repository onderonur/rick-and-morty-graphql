import React from "react";
import { useParams } from "react-router-dom";
import CharacterProfile from "./components/CharacterProfile";
import gql from "graphql-tag";
import { useGetCharacterQuery } from "generated/graphql";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      ...CharacterProfile_character
    }
  }
  ${CharacterProfile.fragments.character}
`;

function Character() {
  const { characterId } = useParams();
  const { data, loading } = useGetCharacterQuery({
    query: GET_CHARACTER,
    variables: characterId ? { id: characterId } : undefined,
    skip: !characterId
  });

  const { character } = data || {};

  return <CharacterProfile character={character} loading={loading} />;
}

export default Character;
