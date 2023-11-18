import type { FragmentType } from '@/gql';
import { graphql, useFragment } from '@/gql';
import { NextLink } from '@/common/next-link';
import { ListItem, ListItemTitle, ListItemSubtitle } from '@/common/list';

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
