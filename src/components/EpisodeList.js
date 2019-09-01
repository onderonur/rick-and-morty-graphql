import React from "react";
import BaseList from "./BaseList";
import EpisodeListItem from "./EpisodeListItem";

function EpisodeList({ episodes, loading, maxVisibleItemCount }) {
  return (
    <BaseList
      items={episodes}
      loading={loading}
      maxVisibleItemCount={maxVisibleItemCount}
      renderItem={episode => (
        <EpisodeListItem key={episode.id} episode={episode} />
      )}
    >
      );
    </BaseList>
  );
}

export default EpisodeList;
