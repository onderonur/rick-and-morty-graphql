import type { FragmentType } from '@/gql';
import { graphql, useFragment } from '@/gql';
import { NextLink } from '@/common/next-link';
import { ListItem, ListItemTitle, ListItemSubtitle } from '@/common/list';

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

export function EpisodeListItem({ episode }: EpisodeListItemProps) {
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
