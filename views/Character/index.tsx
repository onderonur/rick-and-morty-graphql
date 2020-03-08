import React from "react";
import { useParams } from "react-router-dom";
import CharacterProfile from "./components/CharacterProfile";
import gql from "graphql-tag";
import { useGetCharacterQuery } from "@/generated/graphql";
import withApollo from "@/shared/lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import { useRouter } from "next/router";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      ...CharacterProfile_character
    }
  }
  ${CharacterProfile.fragments.character}
`;

function Character() {
  const router = useRouter();
  const { id } = router.query;
  // TODO: I've copy-pasted this function for router queries.
  // Will look for a solid solution.
  const isValidId = (id): id is string => typeof id === "string" && !!id;
  const { data, loading } = useGetCharacterQuery({
    query: GET_CHARACTER,
    variables: isValidId(id) ? { id } : undefined,
    skip: !isValidId(id),
  });

  const { character } = data || {};

  return <CharacterProfile character={character} loading={loading} />;
}

export default withApollo(Character, { getDataFromTree });
