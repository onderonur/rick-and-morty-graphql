import React from "react";
import ListItemLink from "@/common/ListItemLink";
import gql from "graphql-tag";
import { LocationListItem_LocationFragment } from "@/generated/graphql";

interface LocationListItemProps {
  location: LocationListItem_LocationFragment;
}

function LocationListItem({ location }: LocationListItemProps) {
  return (
    <ListItemLink
      divider
      href={`/locations/${location.id}`}
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
