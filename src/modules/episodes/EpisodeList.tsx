import React from "react";
import BaseList from "@/modules/shared/BaseList";
import EpisodeListItem from "./EpisodeListItem";
import gql from "graphql-tag";
import { EpisodeList_EpisodeFragment, Maybe } from "@/generated/graphql";

type ListItem = Maybe<EpisodeList_EpisodeFragment>;

interface EpisodeListProps {
  episodes: Maybe<Array<ListItem>>;
  loading?: boolean;
  maxVisibleItemCount?: number;
}

function renderItem(episode: ListItem) {
  if (episode?.id) {
    return <EpisodeListItem key={episode.id} episode={episode} />;
  }

  return null;
}

function EpisodeList({
  episodes,
  loading,
  maxVisibleItemCount,
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
  `,
};

export default EpisodeList;
