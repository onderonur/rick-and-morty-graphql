import type { FragmentType } from '@/gql';
import { graphql, useFragment } from '@/gql';
import ListItem from '@/common/list-item';
import NextLink from '@/common/next-link';
import ListItemTitle from '@/common/list-item-title';
import ListItemSubtitle from '@/common/list-item-subtitle';

const EpisodeListItem_EpisodeFragment = graphql(/* GraphQL */ `
  fragment EpisodeListItem_EpisodeFragment on Episode {
    id
    name
    episode
    air_date
  }
`);

type EpisodeListItemProps = {
  episode: FragmentType<typeof EpisodeListItem_EpisodeFragment>;
};

export default function EpisodeListItem({ episode }: EpisodeListItemProps) {
  const episodeFragment = useFragment(EpisodeListItem_EpisodeFragment, episode);

  return (
    <ListItem>
      <NextLink href={`/episodes/${episodeFragment.id}`}>
        <ListItemTitle>{episodeFragment.name}</ListItemTitle>
        <ListItemSubtitle>
          {episodeFragment.episode} - {episodeFragment.air_date}
        </ListItemSubtitle>
      </NextLink>
    </ListItem>
  );
}
