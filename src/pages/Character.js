import React from "react";
import CharacterProfile from "components/CharacterProfile";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHARACTER } from "app-graphql";
import { useParams } from "react-router-dom";

function Character() {
  const { characterId } = useParams();
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id: characterId }
  });

  const { character } = data || {};

  return <CharacterProfile character={character} loading={loading} />;
}

export default Character;
