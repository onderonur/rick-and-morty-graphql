import React from 'react';
import ListItemLink from '@/common/ListItemLink';
import gql from 'graphql-tag';
import { LocationListItem_LocationFragment } from '@/generated/graphql';
import { routes } from '@/routing/routes';

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
