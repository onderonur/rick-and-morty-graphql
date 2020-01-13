import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import CharacterProfile from "./components/CharacterProfile";
import gql from "graphql-tag";

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
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id: characterId }
  });

  const { character } = data || {};

  return <CharacterProfile character={character} loading={loading} />;
}

export default Character;
