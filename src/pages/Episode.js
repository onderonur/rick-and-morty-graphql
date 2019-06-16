// OK
import React from "react";
import EpisodeProfile from "components/EpisodeProfile";
import EpisodeQuery from "containers/EpisodeQuery";

function Episode({
  match: {
    params: { episodeId }
  }
}) {
  return (
    <EpisodeQuery episodeId={episodeId}>
      {({ episode, loading }) => (
        <EpisodeProfile episode={episode} loading={loading} />
      )}
    </EpisodeQuery>
  );
}

export default Episode;
