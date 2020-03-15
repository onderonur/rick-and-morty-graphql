import React from "react";
import EpisodeProfile from "./components/EpisodeProfile";
import gql from "graphql-tag";
import { useGetEpisodeQuery } from "@/generated/graphql";
import { useRouter } from "next/router";

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      ...EpisodeProfile_episode
    }
  }
  ${EpisodeProfile.fragments.episode}
`;

function Episode() {
  const router = useRouter();
  const { id } = router.query;
  // TODO: I've copy-pasted this function for router queries.
  // Will look for a solid solution.
  const isValidId = (id): id is string => typeof id === "string" && !!id;
  const { data, loading } = useGetEpisodeQuery({
    query: GET_EPISODE,
    variables: isValidId(id) ? { id } : undefined,
    skip: !isValidId(id),
  });

  const { episode } = data || {};

  return <EpisodeProfile episode={episode} loading={loading} />;
}

export default Episode;
