import ListItemLink from '@/common/ListItemLink';
import { LocationListItem_LocationFragment } from '@/gql/graphql';
import { routes } from '@/routing/routes';
import { gql } from '@apollo/client';

interface LocationListItemProps {
  location: LocationListItem_LocationFragment;
}

function LocationListItem({ location }: LocationListItemProps) {
  return (
    <ListItemLink
      divider
      href={
        location.id
          ? routes.location({ params: { id: location.id } })
          : routes.home({})
      }
      primary={location.name}
      secondary={location.type}
    />
  );
}

LocationListItem.fragments = {
  location: gql`
    fragment LocationListItem_location on Location {
      id
      name
      type
    }
  `,
};

export default LocationListItem;
