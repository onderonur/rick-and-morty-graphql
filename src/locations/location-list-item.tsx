import type { FragmentType } from '@/gql';
import { graphql, useFragment } from '@/gql';
import ListItem from '@/common/list-item';
import NextLink from '@/common/next-link';
import ListItemTitle from '@/common/list-item-title';
import ListItemSubtitle from '@/common/list-item-subtitle';

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

export default function LocationListItem({ location }: LocationListItemProps) {
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
