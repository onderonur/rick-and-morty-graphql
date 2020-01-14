import React from "react";
import BaseListItem from "./BaseListItem";
import gql from "graphql-tag";
import { EpisodeListItem_EpisodeFragment } from "generated/graphql";

interface EpisodeListItemProps {
  episode: EpisodeListItem_EpisodeFragment;
}

function EpisodeListItem({ episode }: EpisodeListItemProps) {
  return (
    <BaseListItem
      to={`/episodes/${episode.id}`}
      primaryText={episode.name}
      secondaryText={`${episode.episode} - ${episode.air_date}`}
    />
  );
}

EpisodeListItem.fragments = {
  episode: gql`
    fragment EpisodeListItem_episode on Episode {
      id
      name
      air_date
      episode
    }
  `
};

export default EpisodeListItem;
