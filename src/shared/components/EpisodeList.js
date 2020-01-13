import React from "react";
import BaseList from "./BaseList";
import EpisodeListItem from "./EpisodeListItem";
import gql from "graphql-tag";

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

EpisodeList.fragments = {
  episode: gql`
    fragment EpisodeList_episode on Episode {
      ...EpisodeListItem_episode
    }
    ${EpisodeListItem.fragments.episode}
  `
};

export default EpisodeList;
