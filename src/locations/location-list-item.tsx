import { ListItem, ListItemSubtitle, ListItemTitle } from '@/common/list';
import type { FragmentType } from '@/gql';
import { graphql, useFragment } from '@/gql';
import { NextLink } from '@/routing/next-link';

const LocationListItem_LocationFragment = graphql(/* GraphQL */ `
  fragment LocationListItem_LocationFragment on Location {
    id
    name
    type
    dimension
  }
`);

type LocationListItemProps = {
  location: FragmentType<typeof LocationListItem_LocationFragment>;
};

export function LocationListItem({ location }: LocationListItemProps) {
  const locationFragment = useFragment(
    LocationListItem_LocationFragment,
    location,
  );

  return (
    <ListItem>
      <NextLink href={`/locations/${locationFragment.id}`}>
        <ListItemTitle>{locationFragment.name}</ListItemTitle>
        <ListItemSubtitle>
          {locationFragment.type} - {locationFragment.dimension}
        </ListItemSubtitle>
      </NextLink>
    </ListItem>
  );
}
