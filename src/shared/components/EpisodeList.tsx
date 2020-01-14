import React from "react";
import BaseList from "./BaseList";
import EpisodeListItem from "./EpisodeListItem";
import gql from "graphql-tag";
import { Episode, EpisodeList_EpisodeFragment } from "generated/graphql";
import Maybe from "graphql/tsutils/Maybe";

interface EpisodeListProps {
  episodes: Maybe<Array<Maybe<EpisodeList_EpisodeFragment>>>;
  loading?: boolean;
  maxVisibleItemCount?: number;
}

function renderItem(episode: Episode) {
  if (episode.id) {
    return <EpisodeListItem key={episode.id} episode={episode} />;
  }

  return null;
}

function EpisodeList({
  episodes,
  loading,
  maxVisibleItemCount
}: EpisodeListProps) {
  return (
    <BaseList
      items={episodes}
      loading={loading}
      maxVisibleItemCount={maxVisibleItemCount}
      renderItem={renderItem}
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
