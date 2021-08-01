import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import BaseCard from "@/common/BaseCard";
import LabeledText from "@/common/LabeledText";
import gql from "graphql-tag";
import { EpisodeCard_EpisodeFragment } from "@/generated/graphql";

interface EpisodeCardProps {
  episode: EpisodeCard_EpisodeFragment;
}

function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <BaseCard>
      <CardHeader title={episode.name} subheader={episode.episode} />
      <CardContent>
        <LabeledText label="Air Date" text={episode.air_date} />
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
  `,
};

export default EpisodeCard;
