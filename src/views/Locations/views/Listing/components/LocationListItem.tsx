import React from "react";
import BaseListItem from "@/components/BaseListItem";
import gql from "graphql-tag";
import { LocationListItem_LocationFragment } from "@/generated/graphql";

interface LocationListItemProps {
  location: LocationListItem_LocationFragment;
}

function LocationListItem({ location }: LocationListItemProps) {
  return (
    <BaseListItem
      href="/locations/[id]"
      as={`/locations/${location.id}`}
      primaryText={location.name}
      secondaryText={location.type}
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
