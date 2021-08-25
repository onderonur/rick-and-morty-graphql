import React from 'react';
import gql from 'graphql-tag';
import { EpisodeListItem_EpisodeFragment } from '@/generated/graphql';
import ListItemLink from '@/common/ListItemLink';
import { routes } from '@/routing/routes';

interface EpisodeListItemProps {
  episode: EpisodeListItem_EpisodeFragment;
}

function EpisodeListItem({ episode }: EpisodeListItemProps) {
  return (
    <ListItemLink
      divider
      href={
        episode.id
          ? routes.episode({ params: { id: episode.id } })
          : routes.home({})
      }
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
