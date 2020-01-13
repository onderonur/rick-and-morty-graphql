import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import EpisodeProfile from "./components/EpisodeProfile";
import gql from "graphql-tag";

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
  const { data, loading } = useQuery(GET_EPISODE, {
    variables: { id: episodeId }
  });

  const { episode } = data || {};

  return <EpisodeProfile episode={episode} loading={loading} />;
}

export default Episode;
