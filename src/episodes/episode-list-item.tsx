import { ListItem, ListItemSubtitle, ListItemTitle } from '@/common/list';
import type { FragmentType } from '@/gql';
import { graphql, useFragment } from '@/gql';
import { NextLink } from '@/routing/next-link';

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
