import React from "react";
import BaseListItem from "./BaseListItem";

function EpisodeListItem({ episode }) {
  return (
    <BaseListItem
      to={`/episodes/${episode.id}`}
      primaryText={episode.name}
      secondaryText={`${episode.episode} - ${episode.air_date}`}
    />
  );
}

export default EpisodeListItem;
