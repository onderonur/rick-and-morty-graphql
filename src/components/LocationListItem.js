import React from "react";
import BaseListItem from "./BaseListItem";

function LocationListItem({ location }) {
  return (
    <BaseListItem
      to={`/locations/${location.id}`}
      primaryText={location.name}
      secondaryText={location.type}
    />
  );
}

export default LocationListItem;
