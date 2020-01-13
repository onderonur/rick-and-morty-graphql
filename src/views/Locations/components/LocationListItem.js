import React from "react";
import BaseListItem from "shared/components/BaseListItem";
import gql from "graphql-tag";

function LocationListItem({ location }) {
  return (
    <BaseListItem
      to={`/locations/${location.id}`}
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
  `
};

export default LocationListItem;
