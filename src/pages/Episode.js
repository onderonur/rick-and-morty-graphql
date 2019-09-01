import React from "react";
import EpisodeProfile from "components/EpisodeProfile";
import { useQuery } from "@apollo/react-hooks";
import { GET_EPISODE } from "app-graphql";

function Episode({
  match: {
    params: { episodeId }
  }
}) {
  const { data, loading } = useQuery(GET_EPISODE, {
    variables: { id: episodeId }
  });

  const { episode } = data || {};

  return <EpisodeProfile episode={episode} loading={loading} />;
}

export default Episode;
