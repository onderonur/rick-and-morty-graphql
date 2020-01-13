import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import BaseCard from "shared/components/BaseCard";
import TextWithLabel from "shared/components/TextWithLabel";
import gql from "graphql-tag";

function EpisodeCard({ episode }) {
  return (
    <BaseCard>
      <CardHeader title={episode.name} subheader={episode.episode} />
      <CardContent>
        <TextWithLabel label="Air Date" text={episode.air_date} />
      </CardContent>
    </BaseCard>
  );
}

EpisodeCard.fragments = {
  episode: gql`
    fragment EpisodeCard_episode on Episode {
      id
      name
      episode
      air_date
    }
  `
};

export default EpisodeCard;
