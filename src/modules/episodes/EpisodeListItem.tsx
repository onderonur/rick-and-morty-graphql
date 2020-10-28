import React from "react";
import gql from "graphql-tag";
import { EpisodeListItem_EpisodeFragment } from "@/generated/graphql";
import ListItemLink from "@/modules/shared/ListItemLink";

interface EpisodeListItemProps {
  episode: EpisodeListItem_EpisodeFragment;
}

function EpisodeListItem({ episode }: EpisodeListItemProps) {
  return (
    <ListItemLink
      divider
      href={`/episodes/${episode.id}`}
      primary={episode.name}
      secondary={`${episode.episode} - ${episode.air_date}`}
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
  `,
};

export default EpisodeListItem;
