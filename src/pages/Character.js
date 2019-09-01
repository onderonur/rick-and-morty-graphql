import React from "react";
import CharacterProfile from "components/CharacterProfile";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHARACTER } from "app-graphql";

function Character({
  match: {
    params: { characterId }
  }
}) {
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id: characterId }
  });

  const { character } = data || {};
  return <CharacterProfile character={character} loading={loading} />;
}

export default Character;
