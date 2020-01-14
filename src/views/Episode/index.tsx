import React from "react";
import { useParams } from "react-router-dom";
import EpisodeProfile from "./components/EpisodeProfile";
import gql from "graphql-tag";
import { useGetEpisodeQuery } from "generated/graphql";

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      ...EpisodeProfile_episode
    }
  }
  ${EpisodeProfile.fragments.episode}
`;

function Episode() {
  const { episodeId } = useParams();
  const { data, loading } = useGetEpisodeQuery({
    query: GET_EPISODE,
    variables: episodeId ? { id: episodeId } : undefined,
    skip: !episodeId
  });

  const { episode } = data || {};

  return <EpisodeProfile episode={episode} loading={loading} />;
}

export default Episode;
