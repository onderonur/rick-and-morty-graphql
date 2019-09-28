import React from "react";
import EpisodeProfile from "components/EpisodeProfile";
import { useQuery } from "@apollo/react-hooks";
import { GET_EPISODE } from "app-graphql";
import { useParams } from "react-router-dom";

function Episode() {
  const { episodeId } = useParams();
  const { data, loading } = useQuery(GET_EPISODE, {
    variables: { id: episodeId }
  });

  const { episode } = data || {};

  return <EpisodeProfile episode={episode} loading={loading} />;
}

export default Episode;
