import { EpisodeListItem_EpisodeFragment } from '@/gql/graphql';
import ListItemLink from '@/common/ListItemLink';
import { routes } from '@/routing/routes';
import { gql } from '@apollo/client';

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
