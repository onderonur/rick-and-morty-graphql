import React from 'react';
import { CardHeader, CardContent } from '@mui/material';
import BaseCard from '@/common/BaseCard';
import LabeledText from '@/common/LabeledText';
import gql from 'graphql-tag';
import { EpisodeCard_EpisodeFragment } from '@/generated/graphql';

interface EpisodeCardProps {
  titleAs?: React.ElementType;
  episode: EpisodeCard_EpisodeFragment;
}

function EpisodeCard({ titleAs, episode }: EpisodeCardProps) {
  return (
    <BaseCard>
      <CardHeader
        title={episode.name}
        titleTypographyProps={{ component: titleAs }}
        subheader={episode.episode}
      />
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
